function pos(num) {
    if(num>0)
    {
        console.log('postive');
    }
    else if(num<0)
    {
        console.log('negative');
    }
    else
    {
        console.log('zero');
    }
    
}
pos(6)

console.log(`..........`);

function neg(num) {
    return num>0?'positive':num==0?'zero':'negative'
    
}
console.log(neg(10));