// write a program to swap two numbers
// num1 and num2
var num1=10
var num2=20

console.log(`value of num1 and num2 before swap ${num1} and ${num2}`);
// create temp variable
var temp
// value of num1 added to temp
temp=num1
//value of num2 is added to num1
num1=num2
//value of temp is added to num2
num2= temp
//console - display num1 and num2
console.log(`value of num1 and num2 before swap ${num1} and ${num2}`);

console.log(`................................`);

// Another method
n1=10
n2=20
t=n1+n2
console.log(n1);
console.log(n2);
n1=t-n1
n2=t-n2
console.log(n1);
console.log(n2);
console.log(`................................`);

// without using temperory variables

var num3 = 40
var num4 = 60
console.log(`value of num1 and num2 before swap ${num3} and ${num4}`);
num3 = num3+num4
num4 = num3 - num4
num3= num3 - num4
console.log(`value of num1 and num2 before swap ${num3} and ${num4}`);






