
//find the highest  value

a=[1,2,3,4,5,7]
highest = a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log('highest value',highest);

//find the lowest value

lowest = a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log('lowest value',lowest);

//find the total sum

sum=a.reduce((num1,num2)=>num1+num2)
console.log('sum',sum);