//numarray =[10,20,30,40,30,20,50,30,60,70,10,40,80]
//w.a.p to find the number count

numarray =[10,20,30,40,30,20,50,30,60,70,10,40,80]
obj={}

numarray.forEach(item=>item in obj?obj[item]+=1:obj[item]=1);
console.log(obj);
