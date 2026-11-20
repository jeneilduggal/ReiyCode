import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";

const root=process.cwd();
const cppText=fs.readFileSync(path.join(root,"cpp-section.js"),"utf8");
const publicText=fs.readFileSync(path.join(root,"public-test-cases.js"),"utf8");
const hiddenText=fs.readFileSync(path.join(root,"hidden-test-cases.js"),"utf8");
const start=cppText.indexOf("const cppStarters=");
const end=cppText.indexOf("\n};\nstarter=function",start);
if(start<0||end<0)throw new Error("Could not locate the C++ reference program map.");
const literal=cppText.slice(start+"const cppStarters=".length,end+2);
const programs=vm.runInNewContext("("+literal+")");
const sandbox={sampleTests:{},window:{}};
vm.runInNewContext(publicText,sandbox);
vm.runInNewContext(hiddenText,sandbox);
const tests=Object.fromEntries(Object.entries(sandbox.sampleTests).map(([id,cases])=>[id,[...cases,...(sandbox.window.hiddenTestCases?.[id]||[])]]));
const ids=Object.keys(tests).sort((a,b)=>Number(a)-Number(b));
const temp=fs.mkdtempSync(path.join(os.tmpdir(),"reiycode-tests-"));
let total=0,passed=0,failed=[];
try{
 for(const id of ids){
  const source=programs[id];
  if(typeof source!=="string"){failed.push({id,case:"compile",reason:"Missing reference C++ program"});continue}
  const sourcePath=path.join(temp,id+".cpp"),binaryPath=path.join(temp,id);
  fs.writeFileSync(sourcePath,source);
  const compile=spawnSync("g++",["-std=c++17","-O2","-pipe",sourcePath,"-o",binaryPath],{encoding:"utf8",timeout:30000});
  if(compile.status!==0){failed.push({id,case:"compile",reason:compile.stderr||compile.error?.message||"Compilation failed"});continue}
  for(let i=0;i<tests[id].length;i++){
   total++;
   const [input,expected]=tests[id][i];
   const run=spawnSync(binaryPath,[],{input,encoding:"utf8",timeout:5000});
   const actual=(run.stdout||"").trim(),want=String(expected).trim();
   if(run.status===0&&actual===want)passed++;
   else failed.push({id,case:i+1,expected:want,actual,stderr:run.stderr||"",status:run.status});
  }
 }
}finally{fs.rmSync(temp,{recursive:true,force:true})}
console.log("Reference verification (public + supplementary hidden): "+passed+"/"+total+" cases passed across "+ids.length+" questions.");
if(failed.length){for(const f of failed)console.error(JSON.stringify(f));process.exitCode=1}
