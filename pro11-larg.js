// find the largest number among two numbers

num1=400
num2=40

if(num1>num2)
{
    console.log(`${num1} is the largest number`);
}
else if(num2 >num1)
{
    console.log(`${num2} is the largest number`);
}
else{
    console.log('Both number are equal');
}

console.log(`..................`);
console.log(num1>num2?`${num1} is greather`:num1==num2?'equal':`${num2} is greather`);