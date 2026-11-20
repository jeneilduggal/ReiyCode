import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root=process.cwd();
const cppText=fs.readFileSync(path.join(root,"cpp-section.js"),"utf8");
const publicText=fs.readFileSync(path.join(root,"public-test-cases.js"),"utf8");
const start=cppText.indexOf("const cppStarters=");
const end=cppText.indexOf("\n};\nstarter=function",start);
if(start<0||end<0)throw new Error("Could not locate C++ reference programs.");
const programs=vm.runInNewContext("("+cppText.slice(start+"const cppStarters=".length,end+2)+")");
const sandbox={sampleTests:{},window:{}};
vm.runInNewContext(publicText,sandbox);
const tests=sandbox.sampleTests;
const jobs=Object.entries(tests).flatMap(([id,cases])=>cases.map(([input,expected],index)=>({id,index:index+1,input,expected,source:programs[id]})));
const base="https://ce.judge0.com";
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function request(url,options,attempt=0){
 const response=await fetch(url,{...options,signal:AbortSignal.timeout(25000)});
 if((response.status===429||response.status>=500)&&attempt<4){await sleep(1000*(attempt+1));return request(url,options,attempt+1)}
 if(!response.ok)throw new Error("Judge0 HTTP "+response.status+" "+(await response.text()).slice(0,250));
 return response.json();
}
async function runOne(job){
 if(!job.source)throw new Error("Missing reference source");
 const payload={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source_code:job.source,language_id:54,stdin:job.input,cpu_time_limit:5,memory_limit:128000})};
 let created;
 try{created=await request(base+"/submissions?base64_encoded=false&wait=true",payload)}catch(error){created=await request(base+"/submissions?base64_encoded=false&wait=false",payload)}
 let result=created;
 if(!result.status||result.status.id<=2){
  if(!created.token)throw new Error("Judge0 did not return a completed result or submission token");
  for(let i=0;i<40;i++){
   await sleep(800);
   result=await request(base+"/submissions/"+created.token+"?base64_encoded=false",{method:"GET"});
   if(result.status&&result.status.id>2)break;
  }
 }
 if(!result?.status||result.status.id!==3)throw new Error("Judge status: "+(result?.status?.description||"timeout")+" "+(result?.compile_output||result?.stderr||""));
 const actual=(result.stdout||"").trim(),expected=String(job.expected).trim();
 if(actual!==expected)throw new Error("Expected "+JSON.stringify(expected)+" but got "+JSON.stringify(actual));
 return true;
}
let next=0,passed=0,failed=[];
async function worker(){
 while(true){
  const index=next++;
  if(index>=jobs.length)return;
  const job=jobs[index];
  try{await runOne(job);passed++}
  catch(error){failed.push({id:job.id,case:job.index,error:String(error.message||error)})}
 }
}
await Promise.all(Array.from({length:4},worker));
console.log("Judge0 public verification: "+passed+"/"+jobs.length+" cases passed across "+Object.keys(tests).length+" questions.");
if(failed.length){for(const failure of failed)console.error(JSON.stringify(failure));process.exitCode=1}
