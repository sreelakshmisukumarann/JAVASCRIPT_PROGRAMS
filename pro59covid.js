//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('district having Highest +ve case ');
data=covid_data.reduce((dis1,dis2)=>dis1[2]>dis2[2]?dis1:dis2)
console.log(data[1]);
console.log(`.................................................`);

//2. district having Highest 1st dose vaccine
console.log('district having Highest 1st dose vaccine');
data=covid_data.reduce((dis1,dis2)=>dis1[5]>dis2[5]?dis1:dis2)
console.log(data[1]);
console.log(`.................................................`);

//3. district having lowest death rate
console.log('district having lowest death rate');
data=covid_data.reduce((dis1,dis2)=>dis1[3]<dis2[3]?dis1:dis2)
console.log(data[1]);
console.log(`.................................................`);

//4. sort data with +ve case in descending order
console.log('sort data with +ve case in descending order');
covid_data.sort((dis1,dis2)=>dis2[2]-dis1[2]).forEach(item=>{console.log(item[1]);});
console.log(`......................................................`);

//5. is district with +ve cases > 15000
console.log('district with +ve cases > 15000');
data=covid_data.some(dis=>dis[2]>15000)
console.log(data?'yes':'no');
console.log(`.........................................................`);

//6. sort data with 1st dose vaccine
console.log('sort data with 1st dose vaccine');
covid_data.sort((dose1,dose2)=>dose1[5]-dose2[5]).forEach(item=>{console.log(item);});
console.log(`...............................................................`);

//7. Print Thrissur details
console.log('print trhissur details');
thr=covid_data.find(dis=>dis[1]=='Thrissur')
console.log(thr);
console.log(`..................................................`);

//8. Print total number of positive cases
console.log('Print total number of positive cases');
total=covid_data.map(dis=>dis[2]).reduce((t1,t2)=>t1+t2)
console.log(total);
console.log(`.............................................................`);

//9. Print total number of curred cases
console.log('Print total number of curred cases');
total=covid_data.map(dis=>dis[4]).reduce((t1,t2)=>t1+t2)
console.log(total);
console.log(`.............................................................`);


//10. Print curred cases in Idukki
console.log('Print curred cases in Idukki');
idukki=covid_data.find(dis=>dis[1]=='Idukki')
console.log(idukki[4]);
console.log(`..................................`);

//find- disply 1st value satisfy the condition
//filter - disply all condictin satisty this condition