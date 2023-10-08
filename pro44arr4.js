// expense = [1200.2300.40000,45677,45,2400,1000,]
// find the lowest expense
// find the highest expense
// find the total expenses

expense = [12000, 23000, 9000, 34000,55000,24000,10000,14000]
// find the lowest expense
lowest = expense[0]

for(let num of expense) //12000 //23000 //4000 //34000 //55000//24000//10000//14000
{
    if(num<=lowest) //12000<=12000 //23000<=12000 //4000<=12000// 34000<=12000//55000<=12000//24000<=12000//10000<=12000//14000<=10000
    {
        lowest= num //12000 //10000
    }
}
console.log(lowest);//10000

console.log(`..............`);

// find the highest expense
highest = expense[0]
for(let num of expense)
{
    if(num>=highest)
    {
        highest = num
    }
}
console.log(highest);

console.log(`..........................`);

// find the total expenses

sum = 0
for (num of expense)
{
    sum = sum + num
}
console.log('total sum',sum);

