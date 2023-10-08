// check whtr given number is positive ot not

 var num= 20

if(num>0)
{
    console.log(`${num} is positive number`);

}
else if(num==0){
    console.log(` ${num} is neighther positive or negative number`);
}
else{
    console.log(` ${num} is a negative number`);
}

//ternary operator
console.log(`...............`);

console.log(num>0?'postive':num==0?'neither postive or negative':'negative');