//operators

//1)Assignment operators =
//2)Arithmetic operators + - / * % **  (**- is used to find power )
//3)

//+ operators
var x=10
var y=30
var z=x+y
console.log(`sum of x and y : ${x+y}`);
console.log(`sum of x and y : ${z}`);

//-
var x1=10
var y1=30
console.log(`sum of x and y : ${x1-y1}`);

//*
var x1=10
var y1=30
console.log(`sum of x and y : ${x1*y1}`);

//%
var x1=28
var y1=5
console.log(`sum of x and y : ${x1%y1}`);

//**
var x1=10

console.log(`power : ${x1**2}`);

//3) Relational operators
// > >= < <= == ===
//output is true or false
// === - also check variables datatypes
num1=10
num2='10'
console.log(`is ${num1} greater than ${num2}: ${num1==num2}`);
console.log(`is ${num1} greater than ${num2}: ${num1===num2}`);

//4 Logical operators
/* AND &&
T && T = T
T && F = F
F && T = F
F && F = T */

/* OR ||
T || T = T
T || F = T
F || T = T
F || F = F */

/* NOT
!T = F
!F = T */

a=10
console.log(`5<a<20 : ${5<a && a<20}`);
console.log(`5<a<20 : ${5<a || a<20}`);
console.log(`..................................`);

a=30
console.log(`5<a<20 : ${5<a && a<20}`);
console.log(`5<a<20 : ${5<a || a<20}`);
console.log(`..................................`);

// incremental(++) - add + 1 to the number
// decremental(--) operators - minus 1 from the number

inc=10
inc++
console.log(inc);

dec=10
dec--
console.log(dec);

inc1=10
console.log(`initail value : ${inc1}`);//10
console.log(`increamented value : ${inc1++}`);//10
console.log(`after incremented ${inc1}`);//11

inc1=10
console.log(`initail value : ${inc1}`);//10
console.log(`increamented value : ${++inc1}`);//11 here ++ position is importend
console.log(`after incremented ${inc1}`);//11

//6 short hand operators
// += -= *= /=
// x= x+10 -> x+=10

var short=10
short += 10 // short = short +10
console.log('result =',short);

var short=10
short -= 10 // short = short +10
console.log('result =',short);

var short=10
short *= 10 // short = short +10
console.log('result =',short);

//7) ternary operator
// condition ? true : false
console.log(`....................`);
var age=34
console.log(age>=18?'eligible':'not eligible');
