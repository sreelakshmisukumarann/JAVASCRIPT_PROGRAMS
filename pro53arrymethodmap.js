
//Array method - map()

//w.a.p to print the square of the given array
//w.a.p to print the cube of the given array

a=[10,11,12,13,14,15]

sq=a.map(num=>num**2)
console.log(sq);

//using foreach
a.forEach(num => {  //it does't return anything 
    console.log(num**2);
});
//w.a.p to print the cube of the given array
qu=a.map(num=>num**3)
console.log(qu);

//w.a.p to create a new array with numbers <=13 increment the number or number >13 decrement the number
//a=[10,11,12,13,14,15]= [11,12,13,14,13,14]

a=[10,11,12,13,14,15]

arr=a.map(num=>num<=13?num+1:num-1)
console.log(arr);



