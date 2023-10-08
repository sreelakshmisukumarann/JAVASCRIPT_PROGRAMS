
// create constant variables
const x = 10
console.log(x);

/* x=20
console.log(x); */

// create var variables - possible re assigns
var y= 50
/* console.log(y); */
y=30
console.log(y);


// create let variables
// i=10
// console.log('i before loop',i); //10

// for( i=1;i<=5;i++)
// {
//     console.log('i inside the loop',i); //1 2 3 4 5
// }

// console.log('i after the loop',i);//10

i=10
console.log('i before loop',i); //10

for( let i=1;i<=5;i++) // here give let - its work only work inside the for loop
{
    console.log('i inside the loop',i); //1 2 3 4 5
}

console.log('i after the loop',i);//10

