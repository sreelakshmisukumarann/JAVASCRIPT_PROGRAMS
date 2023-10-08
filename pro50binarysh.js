// var arr = [10, 11, 12, 3 , 2,4,56]
// check whether 2 is present in the array or not
// sort () - this method is used to sort array

//using binary search
//Algorithm
    // 1) sort the array
    // repeat until low <= up
    // 2) FIND the mid 
    //3) compare mid with seachitem
        // mid === search
            // print the number is found
        // mid < search item
            // low = mid + 1
        //  mid > search item
            // up = mid - 1

//  var arr = [10,11,12,3,4,2,56]

//   arr.sort((num1,num2) => num1-num2)
//   console.log('Ascending order',arr);

//   arr.sort((num1,num2)=>num2-num1)
//   console.log('Descending order',arr);

var arr = [10,11,12,3,4,2,56]
searchitem = 12
low = 0
high = arr.length - 1
count=0
ispresent=false

//sort
arr.sort((num1,num2) => num1-num2)
console.log(arr);

while(low <= high)
{
    count++
    mid = Math.floor((low + high)/2)

    if(arr[mid] == searchitem)
    {   
        
        ispresent= true
        break
    }
    else if(arr[mid] < searchitem)
    {
        low = mid +1
    }
    else if(arr[mid] > searchitem)
    {
        high = mid - 1
    }

}
console.log(count);
console.log(ispresent?'present':'not present');



