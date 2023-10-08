//w.a.p to print duplicate elements from the given array ans:10; 20; 30

a=[10,20,30,20,30,40,50,60,10]
isduplicate = false
for(i=0;i<a.length;i++)
{
    for(j=i+1;j<a.length;j++)
    {
       if(a[i] == a[j])
       { 
        isduplicate =true
        console.log(a[i]);
       }
    }
    /* if(isDuplicate==false)
    {
        console.log('no duplication)
    } */
    if(isduplicate==false)   // !isduplicate&&console.log('no dulication)
    {
        console.log('no dupliocatio ');
    }
}





