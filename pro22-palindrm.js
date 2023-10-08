//w.a.p find a given number palindrome or not
num=155
rem=0
rev=0
temp=num

while(num!=0)
{   
   
    rem=num%10
    rev=rev*10+rem
    num=parseInt(num/10)
}
if(temp==rev)
{
    console.log('palindrome');
}
else
{
    console.log('not a palindrome');
}