//w.a.t to find armstrong number

num=157
rem=0
rev=0
sum=0
temp=num

while(num>0)
{
    rem=num%10
    // rev=rem*rem*rem
    // sum=sum+rev
    sum=sum + rem**3
    num=parseInt(num/10)

}
// console.log(sum);
if(temp == sum){
    console.log('Armstrong number');
}
else
{
    console.log('Not an armstrong number');
}