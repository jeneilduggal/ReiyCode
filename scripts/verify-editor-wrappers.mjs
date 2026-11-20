import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";

const source=fs.readFileSync("editor-modes.js","utf8");
const sigStart=source.indexOf("const leetSignatures=");
const sigEnd=source.indexOf("\nconst logicStarter",sigStart);
const starterStart=sigEnd+1;
const starterEnd=source.indexOf("\nconst hackerStarter",starterStart);
const wrapperStart=source.indexOf("function logicWrapper(",starterEnd);
const wrapperEnd=source.indexOf("\n\nfunction escapeHtml",wrapperStart);
if([sigStart,sigEnd,starterEnd,wrapperStart,wrapperEnd].some(x=>x<0))throw new Error("Could not extract editor wrapper functions.");
const snippet=source.slice(sigStart,sigEnd)+"\n"+source.slice(starterStart,starterEnd)+"\n"+source.slice(wrapperStart,wrapperEnd);
const api=vm.runInNewContext("(()=>{"+snippet+";return {logicStarter,logicWrapper}})()");
const dir=fs.mkdtempSync(path.join(os.tmpdir(),"reiycode-wrappers-"));
const ids=[...Array.from({length:22},(_,i)=>96001+i),...Array.from({length:8},(_,i)=>96023+i),96031,96032,155];
let failed=[];
try{
 for(const id of ids){
  const code=api.logicStarter([id,"Problem","CPP"]);
  const full=api.logicWrapper(id,code);
  const src=path.join(dir,String(id)+".cpp"),bin=path.join(dir,String(id));
  fs.writeFileSync(src,full);
  const result=spawnSync("g++",["-std=c++17","-fsyntax-only",src],{encoding:"utf8",timeout:30000});
  if(result.status!==0)failed.push({id,error:result.stderr||result.error?.message||"compile failed"});
 }
}finally{fs.rmSync(dir,{recursive:true,force:true})}
console.log("Logic-mode wrapper compile check: "+(ids.length-failed.length)+"/"+ids.length+" templates compiled.");
if(failed.length){for(const f of failed)console.error(JSON.stringify(f));process.exitCode=1}
