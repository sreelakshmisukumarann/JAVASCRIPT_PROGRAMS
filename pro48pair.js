//w.a.p to print pairs whose pair sum is 6 ans: 2, 4
b=[2,3,5,1]
nopair=false
for(i=0;i<b.length;i++)
{
    for(j=i+1;j<b.length;j++)
    {
        if(b[i] + b[j] == 6)
        {
            nopair=true
            console.log(b[i],b[j]);
        }
    }
   
}
!nopair&&console.log('nopair');
console.log(`..........................`);

//binary search

// c=[2,4,5,1]
// psum=6
// pair=false
// low=0
// high=c.length-1
// while(low<high)
// {   
//     add = c[low]+c[high]
//     if (psum == add){
        
//         pair=true
//         console.log(c[low],c[high]);
//         low++

//     }
//     else if(psum<add)
//     {
//         high = high-1
//     }
   
// }
// !pair&&console.log('nopair');

b=[2,4,5,6,8]
nopair=false
psum=9
low=0
high= b.length -1

while(low<high)
{
    sum =b[low]+b[high]
    if(sum == psum)
    {
        nopair=true
        console.log(b[low],b[high]);
        low++
    }
    else if(sum < psum)
    {
        low++
    }
    else if(sum >psum)
    {
        high--
    }

}
!nopair&&console.log('nopair');

