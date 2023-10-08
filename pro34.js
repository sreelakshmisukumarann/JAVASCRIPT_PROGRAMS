//w.a.p check a given number is odd or even

// oddeven(6) we can call here before function is created
function oddeven(num) {
    // if(num%2==0)
    // {
    //     console.log('even');
    // }
    // // else if(num==0)
    // // {
    // //     console.log('Number is zero');
    // // }
    // else{
    //     console.log('odd');
    // }
    return num%2==0?'even':'odd'
}
console.log(oddeven(45));