// var arr = [10, 11, 12, 3 , 2,4,56]
// check whether 2 is present in the array or not
arr = [10,11,12,3,4,2,56]
search=12

count=0
ispresent = false
for(let num of arr)
{
    
    count++
    if(num == search)
    {   
        ispresent= true;
        break;
              
    }
    
}
console.log(count);
console.log(ispresent?'present':'not present');

