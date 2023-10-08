
numbers=[[10,20,[34,57]],[30,40],[23,56],[23,56],[100,45]]
//find the numbers >50
console.log('find the numbers >50');
console.log(numbers.flat(Infinity).filter(num=>num>50)); // infinity ->conerte the lowest dimension
console.log(`.................................`);

//find the largest number
console.log('find the largest number');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2?num1:num2));
console.log(`..................................................`);

//find smallest number
console.log('find smallest  number');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1<num2?num1:num2));
console.log(`.....................................................`);

//find the total sum of all numbers
console.log('find total sum of all numbers');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1+num2));

