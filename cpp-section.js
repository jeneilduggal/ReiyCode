/* C++ practice section for ReiyCode */
(function(){
const cppQuestions=[[96001,"Core C++ Foundations — Number Report","Easy","Read n integers into an array. Print their sum, minimum, maximum, number of even values, and arithmetic mean rounded to exactly two decimal places. Use appropriate data types and control structures. This checks variables, constants, input/output, operators, precedence, type conversion, loops, conditions and one-dimensional arrays.","Input:\n5\n2 7 4 9 6\nOutput:\nSum: 28\nMin: 2\nMax: 9\nEven: 3\nAverage: 5.60","Core C++ Basics"],[96002,"Strings — Reverse and Palindrome Check","Easy","Read one line of text (it may contain spaces). Print the reversed string and whether it is a palindrome after ignoring spaces and letter case. Use standard string operations and write a separate function for the palindrome check.","Input:\nNever odd or even\nOutput:\nReversed: neve ro ddo reveN\nPalindrome: Yes","Strings & Arrays"],[96003,"Functions, Recursion & Storage Duration","Easy","Write a recursive factorial function for 0 <= n <= 12. Also write a function that uses a static local variable to count how many times it has been called. Call that function three times. Print the factorial and the final call count. Keep the function declaration, definition and main separate.","Input:\n5\nOutput:\nFactorial: 120\nCall count: 3","Functions, Recursion & Storage Classes"],[96004,"2D Arrays — Matrix Analysis","Easy","Read the number of rows and columns, followed by a matrix. Print the sum of each row and then print the transpose. Use a two-dimensional array and nested loops. Assume rows and columns are at most 20.","Input:\n2 3\n1 2 3\n4 5 6\nOutput:\nRow sums: 6 15\nTranspose:\n1 4\n2 5\n3 6","Arrays & Nested Loops"],[96005,"Pointers & Dynamic Array Allocation","Easy","Read n and n integers. Allocate the array dynamically using new, traverse it using pointer arithmetic (not arr[i]), and pass the pointer to a function that calculates the sum. Print the sum and release the memory using delete[].","Input:\n4\n10 20 30 40\nOutput:\nSum: 100","Pointers & Dynamic Memory"],[96006,"Classes, Objects, Constructors & Destructors","Easy","Create a Student class with private roll number and marks. Provide a default constructor and a parameterized constructor, a member function to display the result, and a destructor. Create one object using each constructor. The destructor should not print anything; use this task to practise object lifetime and constructor/destructor order.","Input:\n101 86\nOutput:\nRoll: 0, Marks: 0\nRoll: 101, Marks: 86","OOP Fundamentals"],[96007,"Copy Constructor — Deep Copy vs Shallow Copy","Medium","Create a class that owns a dynamically allocated integer. Implement a deep-copy copy constructor. Create an object, copy it, change the value through the original object, and print both values. The copied object must remain unchanged. Briefly verify that the two objects own different memory addresses.","Input:\n25 99\nOutput:\nOriginal: 99\nCopy: 25","Constructors & Copy Semantics"],[96008,"Function Overloading & Type Conversion","Medium","Create overloaded functions named area: one calculates the area of a square from an integer side, and another calculates the area of a circle from a double radius. Read both values and print both areas. Demonstrate an explicit conversion where needed and avoid unintended integer division.","Input:\n4 2.5\nOutput:\nSquare: 16\nCircle: 19.63","Compile-time Polymorphism & Type Conversion"],[96009,"Operator Overloading & Friend Functions","Medium","Create a Complex class with real and imaginary parts. Overload the binary + operator to add two complex numbers. Also overload the stream insertion operator << using a friend function so an object can be printed as a+bi. Handle negative imaginary parts cleanly.","Input:\n2 3\n4 -5\nOutput:\nSum: 6-2i","Operator & Friend Functions"],[96010,"Inheritance — Modes and Constructor Order","Medium","Create a base class Person and derived classes Student and TeachingAssistant. Use multilevel or multiple inheritance to represent the teaching assistant. Demonstrate public/protected access appropriately, pass values through constructors, and print the constructor execution order followed by the final object's details. Do not access private base members directly.","Input:\nAsha 21 CS\nOutput:\nPerson constructor\nStudent constructor\nTeachingAssistant constructor\nName: Asha\nAge: 21\nDepartment: CS","Inheritance & Access Modes"],[96011,"Diamond Problem — Virtual Base Class","Hard","Build a diamond hierarchy: Person is the common base; Student and Employee inherit from Person; TeachingAssistant inherits from both Student and Employee. Use virtual inheritance so TeachingAssistant contains only one Person subobject. Initialise the virtual base from the most-derived class and demonstrate the constructor order.","Input:\nRiya 20 45000\nOutput:\nPerson constructor\nStudent constructor\nEmployee constructor\nTeachingAssistant constructor\nName: Riya\nAge: 20\nSalary: 45000","Diamond Inheritance (Standalone)"],[96012,"Runtime Polymorphism — Virtual & Abstract Classes","Medium","Create an abstract Shape class with a pure virtual area() function and a virtual destructor. Derive Circle and Rectangle. Store derived objects through base-class pointers and calculate their areas using runtime polymorphism. Print each area to two decimal places.","Input:\n2\nC 2\nR 3 4\nOutput:\n12.57\n12.00","Runtime Polymorphism & Abstract Classes"],[96013,"Dynamic 2D Memory — Matrix Transpose","Medium","Read rows and columns, dynamically allocate a matrix using int**, fill it, and print its transpose. Release every allocated row and then the row-pointer array. Use a helper function that accepts the dynamically allocated matrix. This checks pointer-to-pointer use and correct new/delete pairing.","Input:\n2 3\n1 2 3\n4 5 6\nOutput:\n1 4\n2 5\n3 6","Dynamic 2D Memory"],[96014,"STL — Containers, Iterators, Algorithms & Functors","Medium","Read n integers into a vector. Sort them in ascending order, remove duplicates, and print the unique values. Then use an iterator to print the values, use an STL algorithm to check whether a target exists, and use a custom functor to sort a copy in descending order. Do not implement sorting manually.","Input:\n7\n4 2 4 1 3 2 5\n3\nOutput:\nAscending: 1 2 3 4 5\nTarget: Found\nDescending: 5 4 3 2 1","STL (Standalone)"],[96015,"Templates — Function Template & Class Template","Hard","Write a function template maximumValue that returns the larger of two values. Then write a class template Pair that stores two values and displays them. Demonstrate both templates with integers and doubles. Avoid writing separate overloaded functions for each data type.","Input:\n10 25\n2.5 1.8\nOutput:\nMax int: 25\nMax double: 2.5\nPair: 10, 25","Templates & Generic Programming (Standalone)"],[96016,"Text File Handling — Read, Write & Append","Medium","Write a program that writes n integers to a text file named numbers.txt, appends one additional integer, then reopens the file using ifstream and prints the sum of all stored numbers. Check that each file opens successfully and close streams when finished. The input supplies n, the n values, and the appended value.","Input:\n3\n10 20 30\n5\nOutput:\nFile sum: 65","File Handling (Standalone)"],[96017,"Exception Handling — Safe Calculator","Medium","Create a calculator that reads two numbers and an operator (+, -, *, /). Use try, throw and catch to handle division by zero and an invalid operator. Print the calculation result for valid input and a clear error message for invalid input. Do not allow the program to continue with an invalid result.","Input:\n10 0 /\nOutput:\nError: Division by zero","Exception Handling (Standalone)"],[96018,"Binary File Records & Command-Line Arguments","Hard","Create a Student record structure and write multiple records to a binary file using ofstream with ios::binary. Reopen the file using ifstream with ios::binary, read the records back, and print them. Use argc/argv to accept an optional filename; if no filename is supplied, use students.dat. Check file-open failures and explain why binary files should be read and written with matching record layouts.","Input:\n2\n101 Asha 86\n102 Dev 91\nOutput:\n101 Asha 86\n102 Dev 91","Binary Files & Command-Line Arguments (Standalone)"]
,[96019,"Rule of Three — Deep Copy, Assignment & Destructor","Hard","Implement a DynamicArray class that owns an integer array. Write a constructor, deep-copy copy constructor, copy-assignment operator and destructor (the Rule of Three). The assignment operator must handle self-assignment and release old memory safely before copying. In main, copy one object, assign it to another, modify the source and show that the other arrays remain independent.","Input:\n3\n1 2 3\nOutput:\nCopied: 1 2 3\nAssigned: 1 2 3\nAfter source change:\nSource: 99 2 3\nCopy: 1 2 3\nAssigned: 1 2 3","Resource Management & Copy Control"]
,[96020,"Virtual Functions, Override & Object Slicing","Hard","Create a base class Employee with a virtual display() function and a virtual destructor. Derive Manager and Developer, each overriding display(). Store derived objects in a vector of unique_ptr<Employee> and call display() through base pointers to demonstrate runtime dispatch. Then create a plain Employee value from a derived object and print its base-only display to demonstrate object slicing.","Input:\n2\nM Asha\nD Dev\nOutput:\nManager: Asha\nDeveloper: Dev\nSliced value: Employee","Runtime Dispatch & Object Slicing"]
,[96021,"STL Challenge — Frequency Ranking with Custom Comparator","Hard","Read n integers and use an unordered_map to count each value's frequency. Move the distinct values into a vector and sort them with a custom comparator: higher frequency first; if frequencies tie, smaller value first. Print value-frequency pairs. Use STL containers and algorithms rather than manually implementing sorting.","Input:\n8\n4 2 4 3 2 4 3 5\nOutput:\n4:3\n2:2\n3:2\n5:1","STL Containers & Custom Comparators"]
,[96022,"Template Specialization — Generic Stack with Safe Access","Hard","Implement a class template Stack with push, pop, top and empty operations using an STL vector internally. If pop or top is called on an empty stack, throw an underflow_error and catch it in main. Add an explicit specialization for Stack<bool> that stores boolean values in an unsigned integer (support up to 32 pushes) and implements the same public operations. Demonstrate both the generic and specialized versions.","Input:\n3\n10 20 30\nOutput:\nTop: 30\nPopped: 30\nTop: 20\nBool top: 1\nError: Stack is empty","Templates, Specialization & Exceptions"]

,[96023,"Two Sum","Leet Difficulty","Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. Assume exactly one solution exists and do not use the same element twice. Input format: n, then n integers, then target. Output the two 0-based indices in ascending order.","Input:\n4\n2 7 11 15\n9\nOutput:\n0 1\n\nInput:\n3\n3 2 4\n6\nOutput:\n1 2","Arrays & Hashing"],
[96024,"Valid Parentheses","Leet Difficulty","Given a string containing only '(', ')', '{', '}', '[' and ']', determine whether the input string is valid. Every opening bracket must be closed by the same type of bracket and in the correct order. Input is one bracket string; output true or false.","Input:\n()\nOutput:\ntrue\n\nInput:\n([)]\nOutput:\nfalse\n\nInput:\n{[]}\nOutput:\ntrue","Stack"],
[96025,"Best Time to Buy and Sell Stock","Leet Difficulty","You are given an array prices where prices[i] is the price of a stock on the i-th day. Choose one day to buy and a later day to sell. Return the maximum profit; if no positive profit is possible, return 0. Input format: n followed by n prices.","Input:\n6\n7 1 5 3 6 4\nOutput:\n5\n\nInput:\n5\n7 6 4 3 1\nOutput:\n0","Arrays & Greedy"],
[96026,"Longest Substring Without Repeating Characters","Leet Difficulty","Given a string s, find the length of the longest substring without repeating characters. A substring is a contiguous sequence of characters. Input is one string without spaces; output its maximum length.","Input:\nabcabcbb\nOutput:\n3\n\nInput:\nbbbbb\nOutput:\n1\n\nInput:\npwwkew\nOutput:\n3","Sliding Window & Hashing"]
];
for(const q of cppQuestions) problems.push([q[0],q[1],"CPP",q[2],q[3],q[4],"",q[5]]);

/* Consistent full problem-statement layout for the 30 core C++/Leet practice tasks. */
const cppDetailedIds=new Set(Array.from({length:30},(_,i)=>96001+i));
function cppStatement(q){
 const id=q[0],title=q[1],level=q[3],topic=q[7]||"C++ Programming",brief=q[4],examples=q[5]||"";
 const chunks=examples.split(/\\n\\s*\\n/).filter(Boolean);
 const sample=chunks.map((x,i)=>"Sample "+(i+1)+"\\n"+x).join("\\n\\n");
 const format=brief+"\\n\\nYour program must be written in standard C++17. Read all required values from standard input (cin) and print only the requested result to standard output (cout). Do not hard-code the sample values. Handle the general input, not just the examples.";
 const requirements={
 96001:"Use loops and an array/vector to calculate every statistic in one traversal where possible. Keep the average as a floating-point value and print exactly two digits after the decimal point.",
 96002:"Preserve the original input line for the reversed output. For palindrome checking, build a normalized copy by ignoring spaces and comparing letters without case sensitivity.",
 96003:"Use a recursive function for factorial. Keep the static counter inside a separate function and call that function exactly three times.",
 96004:"Use nested loops for the matrix. Print row sums in input row order, then print the transpose with one original column per output row.",
 96005:"Allocate with new[], traverse by pointer arithmetic, pass the pointer and size to a sum function, and release the allocation with delete[].",
 96006:"Create both objects requested in the statement. Keep data members private and demonstrate constructor invocation through the observable object state.",
 96007:"Allocate owned data dynamically. Implement a copy constructor that allocates independent storage and copies the value; changing the original must not change the copy.",
 96008:"Use two overloads with the same function name but different parameter types. Avoid integer truncation when calculating the circle area.",
 96009:"Overload operator+ for addition and operator<< as a friend. Format negative imaginary values without printing '+-'",
 96010:"Pass constructor arguments through the inheritance chain. Print constructor messages in the required base-to-derived order.",
 96011:"Use virtual inheritance on both intermediate classes. Initialise the shared virtual base in the most-derived constructor.",
 96012:"Make Shape abstract with a pure virtual area() function and a virtual destructor. Invoke the overridden methods through base-class pointers.",
 96013:"Allocate each matrix row separately using int**. Delete every row before deleting the outer pointer.",
 96014:"Use vector, iterators, sort, unique, find or an equivalent STL algorithm, and a custom functor for descending order.",
 96015:"Implement a function template and a class template. Demonstrate each with more than one numeric type without duplicate type-specific functions.",
 96016:"Use ofstream with truncation for the initial write, append mode for the extra value, and ifstream for reading the complete file.",
 96017:"Use try, throw and catch for division by zero and unsupported operators. Do not divide before checking the denominator.",
 96018:"Open the binary file with ios::binary for both writing and reading. Check stream state and support the optional filename argument.",
 96019:"Implement all three Rule-of-Three members: destructor, copy constructor and copy-assignment operator. Guard self-assignment.",
 96020:"Use virtual display() and override in each derived class. Store objects using unique_ptr<Employee>; separately demonstrate slicing with a value object.",
 96021:"Count values with unordered_map. Sort distinct values by descending frequency, then ascending value for ties.",
 96022:"Implement a class template with push, pop, top and empty. Throw underflow_error for invalid empty-stack operations and provide the required bool specialization.",
 96023:"Use a hash map from value to index. Return the two distinct indices; do not reuse one array position.",
 96024:"Use a stack to track opening brackets. Reject a closing bracket when the stack is empty or its type does not match.",
 96025:"Track the minimum price seen so far and update the best profit at each later day. A negative profit must produce zero.",
 96026:"Use a sliding window and a set/map of last-seen character positions to maintain a substring without duplicates.",
 96027:"Build prefix and suffix products; do not use division. Use a suitable integer type for the product values.",
 96028:"Count character frequencies or sort copies of the strings. Return true only when both strings contain identical character counts.",
 96029:"Maintain low and high indices and repeatedly inspect the middle element. Ensure the search interval shrinks on every iteration.",
 96030:"Use Kadane's algorithm: maintain the best subarray ending at the current index and the best answer seen so far."
 };
 const requirement=requirements[id]||"Use the C++ concepts named in the topic. Keep the solution modular, validate the input assumptions and avoid hard-coded sample output.";
 const sampleBlock=sample?sample.replace(/Input:/g,"Sample Input:").replace(/Output:/g,"Sample Output:"):"No sample is supplied for this question yet.";
 return "Problem Statement\\n"+title+"\\n\\nTask\\n"+format+"\\n\\nRequired approach and concepts\\n"+requirement+"\\n\\nInput Format\\n"+(examples.match(/Input:\\s*[\\s\\S]*?(?=\\nOutput:|$)/)||["Read the values described in the task from standard input."])[0].replace(/^Input:\\s*/,"")+"\\n\\nConstraints\\nUse the limits stated in the task. If a numeric bound is not explicitly specified, assume input values fit in the corresponding C++ int type and use long long for accumulated sums or products when necessary. Strings are read according to the stated line/token format.\\n\\nOutput Format\\nPrint the requested result in the exact order and labels shown in the sample output. Do not print prompts, debugging text or additional explanations.\\n\\n"+sampleBlock+"\\n\\nImplementation Notes\\n- Language: C++17.\\n- Read from stdin and write to stdout.\\n- Match capitalization, spacing, ordering and decimal precision exactly.\\n- Test normal, boundary and edge cases before submitting.";
}
for(let i=0;i<problems.length;i++){const q=problems[i];if(cppDetailedIds.has(q[0])&&q[2]==="CPP"){q[4]=cppStatement(q);}}

const oldStarter=starter;
const cppMain="#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    return 0;\n}";
starter=function(p){return p && p[2]==="CPP" ? cppMain : oldStarter(p)};
const cppSamples={
96001:[["5\n2 7 4 9 6","Sum: 28\nMin: 2\nMax: 9\nEven: 3\nAverage: 5.60"]],
96002:[["Never odd or even","Reversed: neve ro ddo reveN\nPalindrome: Yes"]],
96003:[["5","Factorial: 120\nCall count: 3"]],
96004:[["2 3\n1 2 3\n4 5 6","Row sums: 6 15\nTranspose:\n1 4\n2 5\n3 6"]],
96005:[["4\n10 20 30 40","Sum: 100"]],
96006:[["101 86","Roll: 0, Marks: 0\nRoll: 101, Marks: 86"]],
96007:[["25 99","Original: 99\nCopy: 25"]],
96008:[["4 2.5","Square: 16\nCircle: 19.63"]],
96009:[["2 3\n4 -5","Sum: 6-2i"]],
96010:[["Asha 21 CS","Person constructor\nStudent constructor\nTeachingAssistant constructor\nName: Asha\nAge: 21\nDepartment: CS"]],
96011:[["Riya 20 45000","Person constructor\nStudent constructor\nEmployee constructor\nTeachingAssistant constructor\nName: Riya\nAge: 20\nSalary: 45000"]],
96012:[["2\nC 2\nR 3 4","12.57\n12.00"]],
96013:[["2 3\n1 2 3\n4 5 6","1 4\n2 5\n3 6"]],
96014:[["7\n4 2 4 1 3 2 5\n3","Ascending: 1 2 3 4 5\nTarget: Found\nDescending: 5 4 3 2 1"]],
96015:[["10 25\n2.5 1.8","Max int: 25\nMax double: 2.5\nPair: 10, 25"]],
96016:[["3\n10 20 30\n5","File sum: 65"]],
96017:[["10 0 /","Error: Division by zero"]],
96018:[["2\n101 Asha 86\n102 Dev 91","101 Asha 86\n102 Dev 91"]]
};
Object.assign(sampleTests,cppSamples);
Object.assign(sampleTests,{
96019:[["3\n1 2 3","Copied: 1 2 3\nAssigned: 1 2 3\nAfter source change:\nSource: 99 2 3\nCopy: 1 2 3\nAssigned: 1 2 3"]],
96020:[["2\nM Asha\nD Dev","Manager: Asha\nDeveloper: Dev\nSliced value: Employee"]],
96021:[["8\n4 2 4 3 2 4 3 5","4:3\n2:2\n3:2\n5:1"]],
96022:[["3\n10 20 30","Top: 30\nPopped: 30\nTop: 20\nBool top: 1\nError: Stack is empty"]],
96023:[["4\n2 7 11 15\n9","0 1"],["3\n3 2 4\n6","1 2"],["2\n3 3\n6","0 1"]],
96024:[["()","true"],["([)]","false"],["{[]}","true"],["(","false"]],
96025:[["6\n7 1 5 3 6 4","5"],["5\n7 6 4 3 1","0"],["2\n2 4","2"]],
96026:[["abcabcbb","3"],["bbbbb","1"],["pwwkew","3"],["dvdf","3"]]
});
const difficultySelect=document.getElementById("difficulty");
if(difficultySelect&&!Array.from(difficultySelect.options).some(o=>o.value==="Leet Difficulty")){
const option=document.createElement("option");option.value="Leet Difficulty";option.textContent="Leet Difficulty";difficultySelect.appendChild(option);
}
const toolbar=document.querySelector("#listPage .toolbar");
if(toolbar){
const topic=document.createElement("select");
topic.className="field";topic.id="cppTopicFilter";topic.innerHTML='<option value="All">All CPP topics</option>'+[...new Set(cppQuestions.map(q=>q[5]))].map(x=>'<option>'+x+'</option>').join("");
topic.onchange=()=>renderList();
toolbar.insertBefore(topic,toolbar.children[2]||null);
}
const oldRenderList=renderList;
renderList=function(){
if(currentTopic!=="CPP"){oldRenderList();return}
const q=$("search").value.toLowerCase(),d=$("difficulty").value,sf=$("statusFilter").value,tf=$("cppTopicFilter")?.value||"All",sol=getSolved();
const arr=problems.filter(p=>p[2]==="CPP"&&p[1].toLowerCase().includes(q)&&(d==="All"||p[3]===d)&&(tf==="All"||p[7]===tf)&&(sf==="All"||(sf==="Solved")===sol.includes(p[0])));
$("problemList").innerHTML=arr.length?arr.map(p=>'<div class="problemrow cpp-problemrow" onclick="openProblem('+p[0]+')"><span class="num">#'+p[0]+'</span><span class="pname">'+p[1]+'<small class="cpp-group">'+p[7]+'</small></span><span class="difficulty '+p[3].toLowerCase().replace(/\s+/g,'-')+'">'+p[3]+'</span><span class="solved">'+(sol.includes(p[0])?"✓ Solved":localStorage.getItem(key(p[0]))?"Draft saved":"")+'</span></div>').join(""):'<div class="content muted">No C++ questions match these filters.</div>';
};
const oldShowList=showList;
showList=function(topic){oldShowList(topic);if(topic==="CPP"){$("listTitle").textContent="C++ · Complete Practice Path";$("cppTopicFilter").style.display="";}else if($("cppTopicFilter")){$("cppTopicFilter").style.display="none";$("cppTopicFilter").value="All";}};
const oldOpenProblem=openProblem;
openProblem=function(id){
oldOpenProblem(id);
if(currentProblem&&currentProblem[2]==="CPP"){
$("workTopic").textContent="CPP · "+currentProblem[7].toUpperCase();
$("workMeta").textContent="C++ practice · "+currentProblem[7];
$("leetcodeLink").style.display="none";
$("complexityInfo").textContent="Focus: "+currentProblem[7]+" · Compile with C++17";
$("notes").textContent="Solve this independently first. Use Run to test your sample input, then add your own edge cases. Mark the question solved only when you can explain the approach and the C++ concepts used.";
if(window.reiyadEditor)reiyadEditor.setValue($("code").value);
}
};
const oldUpdateHome=updateHome;
updateHome=function(){oldUpdateHome();const tile=document.getElementById("cppHomeTile");if(tile)tile.querySelector(".tilefoot span").textContent=cppQuestions.length+" questions";};
const homeTiles=document.querySelector(".tiles");
if(homeTiles&&!document.getElementById("cppHomeTile")){
const tile=document.createElement("div");tile.className="card tile";tile.id="cppHomeTile";tile.innerHTML='<div class="symbol">C++</div><h3>C++ Programming</h3><p>26 questions covering fundamentals, pointers, OOP, STL, templates and LeetCode-style challenges.</p><div class="tilefoot"><span>26 questions</span><span>Explore →</span></div>';tile.onclick=()=>showList("CPP");homeTiles.appendChild(tile);
}
const drawer=document.getElementById("sideDrawer");
if(drawer&&!drawer.querySelector('[data-cpp-nav]')){
const b=document.createElement("button");b.dataset.cppNav="1";b.textContent="C++ Programming";b.onclick=()=>{showList("CPP");closeDrawer()};const label=[...drawer.querySelectorAll(".drawer-label")].find(x=>x.textContent==="TOPICS");if(label)label.after(b);
}
const style=document.createElement("style");style.textContent='.difficulty.leet-difficulty{border-color:var(--blue);color:var(--blue)}.cpp-group{display:block;margin-top:4px;color:var(--muted);font-size:10px;font-weight:500}.cpp-problemrow{grid-template-columns:64px minmax(0,1fr) 90px 100px}@media(max-width:560px){.cpp-problemrow{grid-template-columns:36px minmax(0,1fr) 62px;padding:11px 10px}.cpp-problemrow .solved{display:none}}';document.head.appendChild(style);
updateHome();
})();