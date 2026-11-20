(function(){
 if(typeof sampleTests!=="object")return;
 const cases={
 96001:[["1\n7","Sum: 7\nMin: 7\nMax: 7\nEven: 0\nAverage: 7.00"],["4\n-2 0 5 8","Sum: 11\nMin: -2\nMax: 8\nEven: 3\nAverage: 2.75"],["3\n1 3 5","Sum: 9\nMin: 1\nMax: 5\nEven: 0\nAverage: 3.00"]],
 96002:[["racecar","Reversed: racecar\nPalindrome: Yes"],["Hello World","Reversed: dlroW olleH\nPalindrome: No"],["A man a plan a canal Panama","Reversed: amanaP lanac a nalp a nam A\nPalindrome: Yes"]],
 96003:[["0","Factorial: 1\nCall count: 3"],["1","Factorial: 1\nCall count: 3"],["6","Factorial: 720\nCall count: 3"]],
 96004:[["1 1\n9","Row sums: 9\nTranspose:\n9"],["2 2\n1 2\n3 4","Row sums: 3 7\nTranspose:\n1 3\n2 4"],["3 1\n5\n0\n-2","Row sums: 5 0 -2\nTranspose:\n5 0 -2"]],
 96005:[["1\n-7","Sum: -7"],["3\n1 2 3","Sum: 6"],["5\n10 20 30 40 50","Sum: 150"]],
 96006:[["1 1","Roll: 0, Marks: 0\nRoll: 1, Marks: 1"],["25 100","Roll: 0, Marks: 0\nRoll: 25, Marks: 100"],["999 0","Roll: 0, Marks: 0\nRoll: 999, Marks: 0"]],
 96007:[["5 8","Original: 8\nCopy: 5"],["-10 20","Original: 20\nCopy: -10"],["0 -1","Original: -1\nCopy: 0"]],
 96008:[["1 1","Square: 1\nCircle: 3.14"],["5 0","Square: 25\nCircle: 0.00"],["10 3.5","Square: 100\nCircle: 38.48"]],
 96009:[["0 0\n0 0","Sum: 0+0i"],["1 -2\n3 -4","Sum: 4-6i"],["-5 7\n2 3","Sum: -3+10i"]],
 96010:[["A 1 X","Person constructor\nStudent constructor\nTeachingAssistant constructor\nName: A\nAge: 1\nDepartment: X"],["Neha 22 IT","Person constructor\nStudent constructor\nTeachingAssistant constructor\nName: Neha\nAge: 22\nDepartment: IT"],["Sam 30 CS","Person constructor\nStudent constructor\nTeachingAssistant constructor\nName: Sam\nAge: 30\nDepartment: CS"]],
 96011:[["A 1 1000","Person constructor\nStudent constructor\nEmployee constructor\nTeachingAssistant constructor\nName: A\nAge: 1\nSalary: 1000"],["Mira 25 50000","Person constructor\nStudent constructor\nEmployee constructor\nTeachingAssistant constructor\nName: Mira\nAge: 25\nSalary: 50000"],["Dev 40 99999","Person constructor\nStudent constructor\nEmployee constructor\nTeachingAssistant constructor\nName: Dev\nAge: 40\nSalary: 99999"]],
 96012:[["1\nC 1","3.14"],["1\nR 2 5","10.00"],["3\nC 3\nR 1 1\nC 0","28.27\n1.00\n0.00"]],
 96013:[["1 1\n8","8"],["2 2\n1 2\n3 4","1 3\n2 4"],["3 1\n5\n6\n7","5\n6\n7"]],
 96014:[["1\n9\n9","Ascending: 9\nTarget: Found\nDescending: 9"],["4\n4 4 4 4\n2","Ascending: 4\nTarget: Not Found\nDescending: 4"],["5\n-1 3 0 3 2\n0","Ascending: -1 0 2 3\nTarget: Found\nDescending: 3 2 0 -1"]],
 96015:[["1 2\n1.5 2.5","Max int: 2\nMax double: 2.5\nPair: 1, 2"],["-5 -2\n-3.5 -9.2","Max int: -2\nMax double: -3.5\nPair: -5, -2"],["100 100\n7.25 7.25","Max int: 100\nMax double: 7.25\nPair: 100, 100"]],
 96016:[["1\n7\n3","File sum: 10"],["2\n-5 10\n-2","File sum: 3"],["4\n1 2 3 4\n5","File sum: 15"]],
 96017:[["5 2 +","7"],["8 3 /","2.66667"],["10 0 /","Error: Division by zero"]],
 96018:[["1\n1 A 10","1 A 10"],["2\n2 B 20\n3 C 30","2 B 20\n3 C 30"],["3\n10 Ada 99\n11 Ben 88\n12 Cal 77","10 Ada 99\n11 Ben 88\n12 Cal 77"]],
 96019:[["1\n5","Copied: 5\nAssigned: 5\nAfter source change:\nSource: 99\nCopy: 5\nAssigned: 5"],["3\n1 2 3","Copied: 1 2 3\nAssigned: 1 2 3\nAfter source change:\nSource: 99 2 3\nCopy: 1 2 3\nAssigned: 1 2 3"],["2\n-1 0","Copied: -1 0\nAssigned: -1 0\nAfter source change:\nSource: 99 0\nCopy: -1 0\nAssigned: -1 0"]],
 96020:[["1\nM A","Manager: A\nSliced value: Employee"],["2\nM Mira\nD Dev","Manager: Mira\nDeveloper: Dev\nSliced value: Employee"],["2\nD Lee\nM Kim","Developer: Lee\nManager: Kim\nSliced value: Employee"]],
 96021:[["1\n5","5:1"],["4\n2 2 1 1","1:2\n2:2"],["6\n9 9 9 1 1 3","9:3\n1:2\n3:1"]],
 96022:[["1\n7","Top: 7\nPopped: 7\nError: Stack is empty\nBool top: 1"],["3\n1 2 3","Top: 3\nPopped: 3\nTop: 2\nBool top: 1"],["2\n-1 0","Top: 0\nPopped: 0\nTop: -1\nBool top: 1"]],
 96023:[["4\n2 7 11 15\n9","0 1"],["3\n3 2 4\n6","1 2"],["2\n3 3\n6","0 1"]],
 96024:[["()","true"],["([)]","false"],["{[]}","true"]],
 96025:[["6\n7 1 5 3 6 4","5"],["5\n7 6 4 3 1","0"],["5\n2 4 1 8 3","7"]],
 96026:[["abcabcbb","3"],["bbbbb","1"],["pwwkew","3"]]
 };
 for(const [id,tests] of Object.entries(cases))sampleTests[id]=tests;
 window.reiyadPublicTestCounts=Object.fromEntries(Object.entries(cases).map(([id,t])=>[id,t.length]));
})();