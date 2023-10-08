//w.a.t to find a reverse of a number

//123


n=1234
rev=0
rem=0
while(n>0)
{
    rem=n%10 // 4 3

    rev=rev*10+rem //0*10+4=4 //4*10+3=43

    n=parseInt(n/10) //123.4  //123/10=12.3
}
console.log(rev);

