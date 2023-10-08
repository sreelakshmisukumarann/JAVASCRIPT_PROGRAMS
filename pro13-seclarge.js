//w.a.to input 3 number and print the second largest number and sort the three numbers in descending order

var num1= 10
var num2=100
var num3=300


if (num1>num2 && num1>num3)
{
    if(num2>num3)
    {
        console.log(`${num2} is the second largest number`);
        console.log(`decending order is : ${num1},${num2},${num3} `);
    }
    else
    {
        console.log(`${num3} is the second largest number`); 
        console.log(`decending order is : ${num1},${num3},${num2} `);
    }
}

if (num2>num1 && num2>num3)
{
    if(num1>num3)
    {
        console.log(`${num1} is the second largest number`);
        console.log(`decending order is : ${num2},${num1},${num3} `);
    }
    else{
        console.log(`${num3} is the second largest number`);
        console.log(`decending order is : ${num2},${num3},${num1} `);
    }
}

if (num3>num1 && num3>num2)
{
    if(num1>num2)
    {
        console.log(`${num1} is the second largest number`);
        console.log(`decending order is : ${num3},${num1},${num2} `);
    }
    else{
        console.log(`${num2} is the second largest number`);
        console.log(`decending order is : ${num3},${num2},${num1} `);
    }
}
else
{
    console.log('all numbers are equal');
}

