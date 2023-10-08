
// different ways to display array items

arr = ['apple' ,'pineapple','strawberry','kiwi']
for(index=0;index<arr.length;index++)
{
    console.log(arr[index]);
}

console.log(`.............`);

for(let i in arr)
{
    console.log(arr[i]);
}

console.log(`...........`);

for(let fruit of arr)
{
    console.log(fruit);
}
