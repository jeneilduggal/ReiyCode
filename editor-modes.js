(function(){
"use strict";
const $=id=>document.getElementById(id);
const isCpp=p=>p&&p[0]>=96001&&p[0]<=96030;
const logicKey=id=>"reiyad_logic_"+id;
const hrKey=id=>"reiyad_hr_"+id;
const hrTemplate=`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    // Read all whitespace-separated input tokens.
    vector<string> input;
    string token;
    while (cin >> token) input.push_back(token);

    // Parse input and write your solution here.

    return 0;
}`;
const logicTemplates={
96023:`class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};`,
96024:`class Solution {
public:
    bool isValid(string s) {
        
    }
};`,
96025:`class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
    }
};`,
96026:`class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        
    }
};`,
96027:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        
    }
};`,
96028:`class Solution {
public:
    bool isAnagram(string s, string t) {
        
    }
};`,
96029:`class Solution {
public:
    int search(vector<int>& nums, int target) {
        
    }
};`,
96030:`class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
    }
};`
};
const logicTemplate=p=>logicTemplates[p[0]]||`class Solution {
public:
    void solve() {
        // Implement the required logic here.
    }
};`;
let mode="logic", switching=false;
function editorGet(){return window.reiyadEditor?reiyadEditor.getValue():$("code").value}
function editorSet(v){if(window.reiyadEditor)reiyadEditor.setValue(v);else $("code").value=v}
function saveModeBuffer(){if(!window.currentId)return;localStorage.setItem(mode==="logic"?logicKey(currentId):hrKey(currentId),editorGet())}
function loadMode(m){
 if(!currentProblem)return;
 saveModeBuffer();
 mode=m;
 const key=m==="logic"?logicKey(currentId):hrKey(currentId);
 const existing=localStorage.getItem(key);
 let value=existing;
 if(value===null){
   if(m==="logic") value=logicTemplate(currentProblem);
   else value=hrTemplate;
   localStorage.setItem(key,value);
 }
 switching=true;editorSet(value);switching=false;
 const l=$("editorModeLogic"),h=$("editorModeHacker");
 if(l)l.classList.toggle("active",m==="logic");
 if(h)h.classList.toggle("active",m==="hacker");
 const hint=$("editorModeHint");
 if(hint)hint.textContent=m==="logic"?"Function/class only · LeetCode-style":"Complete C++17 program · stdin/stdout";
 const summary=$("testSummary");
 if(summary&&m==="logic")summary.textContent="Logic-only mode is for writing the function/class. Switch to HackerRank mode to run stdin/stdout test cases with Judge0.";
}
function addModeControls(){
 const bar=document.querySelector("#workPage .editor-actions");
 if(!bar||$("editorModeLogic"))return;
 const wrap=document.createElement("div");wrap.className="editor-mode-switch";
 wrap.innerHTML='<span class="tiny muted">Editor mode</span><button type="button" class="btn active" id="editorModeLogic">Default · Logic only</button><button type="button" class="btn" id="editorModeHacker">HackerRank · Full program</button><span id="editorModeHint" class="tiny muted"></span>';
 bar.parentNode.insertBefore(wrap,bar.nextSibling);
 $("editorModeLogic").onclick=()=>loadMode("logic");
 $("editorModeHacker").onclick=()=>loadMode("hacker");
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
const previousOpen=window.openProblem;
window.openProblem=function(id){
 previousOpen(id);
 addModeControls();
 if(!currentProblem)return;
 const solutionPane=$("tab-solutions");
 if(solutionPane&&currentProblem[0]>=96001&&currentProblem[0]<=96030&&typeof starter==="function"){
   const pre=document.createElement("pre");pre.className="solution-code";pre.textContent=starter(currentProblem);
   solutionPane.innerHTML="";const wrap=document.createElement("div");wrap.className="content";const title=document.createElement("h2");title.textContent="Reference C++17 solution";const note=document.createElement("p");note.className="muted";note.textContent="Complete reference implementation for this exercise. The editor remains separate.";wrap.append(title,note,pre);solutionPane.append(wrap);
 }
 // Maintain independent drafts for both editor modes per problem.
 mode="logic";
 let logic=localStorage.getItem(logicKey(id));
 if(logic===null){logic=logicTemplate(currentProblem);localStorage.setItem(logicKey(id),logic)}
 switching=true;editorSet(logic);switching=false;
 const hint=$("editorModeHint");if(hint)hint.textContent="Function/class only · LeetCode-style";
 $("editorModeLogic")?.classList.add("active");$("editorModeHacker")?.classList.remove("active");
 if(isCpp(currentProblem)&&id>=96023){
   const description=$("description");
   if(description)description.textContent=String(currentProblem[4]||"").replace(/Problem Statement\n[^\n]*\n\nTask\n/,"");
 }
};
const oldReset=window.resetCode;
window.resetCode=function(){
 if(!currentProblem)return;
 const fresh=mode==="logic"?logicTemplate(currentProblem):hrTemplate;
 if(!confirm("Reset this "+(mode==="logic"?"logic-only":"HackerRank") +" editor draft?"))return;
 editorSet(fresh);localStorage.setItem(mode==="logic"?logicKey(currentId):hrKey(currentId),fresh);
 if($("saveState"))$("saveState").textContent="Starter restored";
};
const oldRun=window.runCode;
window.runCode=async function(){
 if(mode==="logic"){if($("output"))$("output").textContent="Switch to HackerRank · Full program mode before running with stdin/stdout. Logic-only mode is intended for the function/class implementation.";return}
 return oldRun();
};
const oldSubmit=window.submitCode;
window.submitCode=async function(){
 if(mode==="logic"){if($("testSummary"))$("testSummary").textContent="Switch to HackerRank · Full program mode before running public test cases.";if($("output"))$("output").textContent="Public test cases execute complete programs. Switch to HackerRank mode, add input parsing and output, then submit.";return}
 return oldSubmit();
};
const code=$("code");
if(code)code.addEventListener("input",()=>{if(!switching&&currentId)saveModeBuffer()});\nif(window.reiyadEditor)reiyadEditor.on("change",()=>{if(!switching&&currentId)saveModeBuffer()});\nwindow.addEventListener("load",()=>{if(window.reiyadEditor)reiyadEditor.on("change",()=>{if(!switching&&currentId)saveModeBuffer()})});
window.addEventListener("load",()=>{
 addModeControls();
 if(currentProblem){loadMode("logic")}
});
})();