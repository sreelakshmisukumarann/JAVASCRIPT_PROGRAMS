// w.a.p to display numbers whose exponential is in the range of 8 to 36
//user can iput power to find the exponential for a perticular number

//power = 2
// 3 4 5 6


power=2
i=1
exp=0
while(i<=10)
{
    exp=i**power
  
    // console.log(exp);
    if(exp>=8 && exp<=36)  //if(8<=num**power && num**power<=36)
    {
        console.log(i);
    }
   
    if(exp >= 36)
    {
        break; // break is used tonforcefully exit a loop while meting a conditions
    }
    i++

}
