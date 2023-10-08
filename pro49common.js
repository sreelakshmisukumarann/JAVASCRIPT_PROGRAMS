//w.a.p to print common numbers from a given array ans : 11, 20 , 30
p = [10,12 , 20, 30]
b =[10, 13, 12,50]
a=[]

common=false
count=0
// for(i=0;i<p.length;i++)
// {
//     for(j=0;j<b.length;j++)
//     {
//         if(p[i] == b[j])
//         {
//             common=true
//             a.push(p[i])
            
//         }
//     }  
// }
// console.log(a);
// !common&&console.log('no common elements');

for(let i of p)
{
    count++
    for(let j of b)
    {
        if(i==j)
        {
            common=true
            console.log(i);
            break
        }
    }
}
console.log('executions-',count);
!common&&console.log('no common elements');

console.log(`................................`);

// shortest and fast method
x = [10,12 , 20, 30]
y=[10, 13, 12,50]

a=0
b=0
count=0
ispresent=false
while(a<x.length && b<y.length)
{   
    count++
     if(x[a]==y[b])
     {
        console.log(x[a]);
        ispresent=true
        a++
        b++
       
     }
     else if(x[a]<y[b])
     {
        a++
     }
     else(x[a]>y[b])
     {
        b++
     }

}
console.log('execution-',count);
!ispresent&&console.log('no common elements');



