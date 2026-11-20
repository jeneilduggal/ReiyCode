(function(){
"use strict";
const $=id=>document.getElementById(id);
const logicKey=id=>"reiyad_logic_"+id;
const hackerKey=id=>"reiyad_hr_"+id;
const leetSignatures={
96023:"vector<int> twoSum(vector<int>& nums, int target)",
96024:"bool isValid(string s)",
96025:"int maxProfit(vector<int>& prices)",
96026:"int lengthOfLongestSubstring(string s)",
96027:"vector<int> productExceptSelf(vector<int>& nums)",
96028:"bool isAnagram(string s, string t)",
96029:"int search(vector<int>& nums, int target)",
96030:"int maxSubArray(vector<int>& nums)"
};
const logicStarter=p=>{
 const sig=leetSignatures[p[0]];
 if(sig)return "class Solution {\npublic:\n    "+sig+" {\n        \n    }\n};";
 return "class Solution {\npublic:\n    void solve(istream& in, ostream& out) {\n        \n    }\n};";
};
const hackerStarter=`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<string> tokens;
    string token;
    while (cin >> token) tokens.push_back(token);

    return 0;
}`;
let mode="logic", switching=false;
function getCode(){return window.reiyadEditor?window.reiyadEditor.getValue():$("code").value}
function setCode(value){if(window.reiyadEditor)window.reiyadEditor.setValue(value);else $("code").value=value}
function storeDraft(){
 if(!currentId)return;
 localStorage.setItem(mode==="logic"?logicKey(currentId):hackerKey(currentId),getCode());
}
function setMode(next){
 if(!currentProblem)return;
 storeDraft();
 mode=next;
 const k=next==="logic"?logicKey(currentId):hackerKey(currentId);
 let value=localStorage.getItem(k);
 if(value===null){value=next==="logic"?logicStarter(currentProblem):hackerStarter;localStorage.setItem(k,value)}
 switching=true;setCode(value);switching=false;
 $("editorModeLogic")?.classList.toggle("active",next==="logic");
 $("editorModeHacker")?.classList.toggle("active",next==="hacker");
 const hint=$("editorModeHint");
 if(hint)hint.textContent=next==="logic"?"Class/function only · Judge wrapper supplied automatically":"Complete C++17 program · write main(), cin and cout";
 if($("testSummary"))$("testSummary").textContent=next==="logic"?"Logic-only submissions are wrapped with a question-specific main() for public tests.":"Full-program submissions run exactly as written.";
}
function addControls(){
 const bar=document.querySelector("#workPage .editor-actions");
 if(!bar||$("editorModeLogic"))return;
 const wrap=document.createElement("div");wrap.className="editor-mode-switch";
 wrap.innerHTML='<span class="tiny muted">Editor mode</span><button type="button" class="btn active" id="editorModeLogic">Default · Logic only</button><button type="button" class="btn" id="editorModeHacker">HackerRank · Full program</button><span id="editorModeHint" class="tiny muted"></span>';
 bar.parentNode.insertBefore(wrap,bar.nextSibling);
 $("editorModeLogic").onclick=()=>setMode("logic");
 $("editorModeHacker").onclick=()=>setMode("hacker");
}
const style=document.createElement("style");
style.textContent=`
#description{white-space:pre-wrap;line-height:1.85;font-size:13px;color:var(--txt);overflow-wrap:anywhere}
#example{white-space:pre-wrap;line-height:1.8}
#tab-description .content{max-width:100%;line-height:1.8}
#tab-description h2,#tab-description h3{letter-spacing:-.2px}
.leet-tabs{display:flex;gap:5px;flex-wrap:wrap}
.leet-tabs button{background:transparent;border:0;border-bottom:2px solid transparent;color:var(--muted);padding:10px 9px;font-size:11px;font-weight:800}
.leet-tabs button.active{color:var(--grad-a);border-bottom-color:var(--grad-a)}
.editor-mode-switch{display:flex;align-items:center;gap:7px;flex-wrap:wrap;padding:10px 13px;border-bottom:1px solid var(--line);background:var(--panel2)}
.editor-mode-switch .btn{font-size:10px;padding:7px 9px}
.editor-mode-switch .btn.active{background:var(--grad-a);color:#081321;border-color:transparent}
#editorModeHint{margin-left:auto}
@media(max-width:600px){#editorModeHint{width:100%;margin-left:0}}
`;
document.head.appendChild(style);
function logicWrapper(id,code){
 const prefix="#include <bits/stdc++.h>\nusing namespace std;\n";
 if(id>=96001&&id<=96022)return prefix+code+"\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);Solution s;s.solve(cin,cout);return 0;}\n";
 const mains={
 96023:"int main(){int n;cin>>n;vector<int>a(n);for(int&x:a)cin>>x;int t;cin>>t;Solution s;auto v=s.twoSum(a,t);sort(v.begin(),v.end());for(int i=0;i<(int)v.size();i++)cout<<(i?\" \":\"\")<<v[i];}",
 96024:"int main(){string s;cin>>s;cout<<(Solution().isValid(s)?\"true\":\"false\");}",
 96025:"int main(){int n;cin>>n;vector<int>a(n);for(int&x:a)cin>>x;cout<<Solution().maxProfit(a);}",
 96026:"int main(){string s;getline(cin>>ws,s);cout<<Solution().lengthOfLongestSubstring(s);}",
 96027:"int main(){int n;cin>>n;vector<int>a(n);for(int&x:a)cin>>x;auto v=Solution().productExceptSelf(a);for(int i=0;i<n;i++)cout<<(i?\" \":\"\")<<v[i];}",
 96028:"string a,b;cin>>a>>b;cout<<(Solution().isAnagram(a,b)?\"true\":\"false\");}",
 96029:"int main(){int n;cin>>n;vector<int>a(n);for(int&x:a)cin>>x;int t;cin>>t;cout<<Solution().search(a,t);}",
 96030:"int main(){int n;cin>>n;vector<int>a(n);for(int&x:a)cin>>x;cout<<Solution().maxSubArray(a);}"
 };
 let main=mains[id]||"";
 if(id===96028)main="int main(){"+main;
 return prefix+code+"\n"+main+"\n";
}
const previousOpen=window.openProblem;
window.openProblem=function(id){
 previousOpen(id);
 if(!currentProblem)return;
 addControls();
 mode="logic";
 const k=logicKey(id);let code=localStorage.getItem(k);
 if(code===null){code=logicStarter(currentProblem);localStorage.setItem(k,code)}
 switching=true;setCode(code);switching=false;
 $("editorModeLogic")?.classList.add("active");$("editorModeHacker")?.classList.remove("active");
 if($("editorModeHint"))$("editorModeHint").textContent="Class/function only · Judge wrapper supplied automatically";
 if($("testSummary"))$("testSummary").textContent="Logic-only submissions are wrapped with a question-specific main() for public tests.";
 const pane=$("tab-solutions");
 if(pane&&currentProblem[2]==="CPP"&&typeof window.starter==="function"){
   const source=window.starter(currentProblem);
   const wrap=document.createElement("div");wrap.className="content";
   const h=document.createElement("h2");h.textContent="Complete C++17 reference solution";
   const p=document.createElement("p");p.className="muted";p.textContent="Reference code is separate from your editor draft.";
   const pre=document.createElement("pre");pre.className="solution-code";pre.textContent=source;
   wrap.append(h,p,pre);pane.replaceChildren(wrap);
 }
};
window.reiyadEditorMode=()=>mode;
window.reiyadBuildSubmissionSource=(id,source)=>mode==="logic"?logicWrapper(id,source):source;
const oldRunOne=window.runOne;
if(typeof oldRunOne==="function"){
 window.runOne=async function(input){
   const id=currentId,source=window.reiyadBuildSubmissionSource(id,getCode());
   const base="https://ce.judge0.com";
   const response=await fetch(base+"/submissions?base64_encoded=false&wait=false",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source_code:source,language_id:54,stdin:input,cpu_time_limit:5,memory_limit:128000})});
   if(!response.ok)throw Error("Judge0 HTTP "+response.status);
   const job=await response.json();let result;
   for(let i=0;i<40;i++){await new Promise(resolve=>setTimeout(resolve,800));const poll=await fetch(base+"/submissions/"+job.token+"?base64_encoded=false");result=await poll.json();if(result.status.id>2)break}
   return result;
 };
}
const originalReset=window.resetCode;
window.resetCode=function(){
 if(!currentProblem)return;
 if(!confirm("Reset this "+(mode==="logic"?"logic-only":"HackerRank")+" draft?"))return;
 const fresh=mode==="logic"?logicStarter(currentProblem):hackerStarter;
 setCode(fresh);localStorage.setItem(mode==="logic"?logicKey(currentId):hackerKey(currentId),fresh);
 if($("saveState"))$("saveState").textContent="Starter restored";
};
const code=$("code");
if(code)code.addEventListener("input",()=>{if(!switching)storeDraft()});
if(window.reiyadEditor)window.reiyadEditor.on("change",()=>{if(!switching)storeDraft()});
window.addEventListener("load",()=>{addControls();if(currentProblem)setMode("logic")});
})();