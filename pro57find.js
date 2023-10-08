//array method - find

fruits =['apple','banana','mango']

//print the value mango from the given array if mango is a item

b=fruits.find(fruits=>fruits=='mango')
console.log(b);

//print the boolean value if mango is have or not
b1=fruits.includes('mango')?'yes':'no'
console.log(b1);

//find the position of the mango 
mango=fruits.indexOf('mango')
console.log(mango);

//array method - some
a=[10,11,12,13,14]
b=a.some(num=>num>20)
console.log(b?'yes':'no');

console.log(`......................`);
//array mrthod - splice to add or remove

a=['max','miler','mini','manu']

//remove mini from the array

a.splice(2,1)
console.log(a);

//remove mini and manu from the array
a=['max','miler','mini','manu']
a.splice(2,2)
console.log(a);

//add maxwell as third item
a=['max','miler','mini','manu']
a.splice(2,0,'maxw2ell')
console.log(a);