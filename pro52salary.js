//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
// for(let emp of employee)
// {
//     console.log(emp[1]);
    
// }
console.log('employee name');
employee.map(emp=>emp[1]).forEach(pro=>{console.log(pro);});
// console.log(employee);
console.log(`................`);

//print total numbers of employee
// count=0
// for(let emp of employee)
// {
//     count++
    
// }
console.log('Number of employess:',employee.length);

//print developer employee details

console.log('developer employee details:');
// for(let emp of employee)
// {
//     if(emp[2]=='developer')
//     console.log(emp);
    
// }

empdt=employee.filter(emp=>emp[2]=='developer').forEach(pro=>{console.log(pro);});
console.log(empdt);



//print employee whose salary > 30000
console.log('employee whose salary > 30000:');
// for(let emp of employee){
//     if(emp[4] > 30000)
//     {
//         console.log(emp[1]);
//     }
// }
employee.filter(emp=>emp[4]>3000).forEach(pro=>{console.log(pro);});


// print details of employee laisha
console.log('details of employee laisha');
// for(let emp of employee){
//     if(emp[1]=='Laisha')
//     {
//         console.log(emp);
//     }
// }
lai=employee.find(emp=>emp[1]=='Laisha')
console.log(lai);


//sort employee based on their salary in descending order
console.log('employee based on their salary in descending order');
 employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
 console.log(employee);


//sort employee based on their experience in ascending order
console.log('employee based on their experience in ascending order');
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
 console.log(employee);

// print the employ name whose have the higest salary
console.log(' the employ name whose have the higest salary');

// employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
//  console.log(employee[0][1]);
high=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(high);
console.log(`............`);

// print the employ name whose have the least salary
console.log('the employ name whose have the least salary');
// employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
//  console.log(employee[8][1]);
least=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(least);
console.log(`................`);

//print employee with highest salary
console.log(' employee with highest salary');
employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
 console.log(employee[0]);



//total salary

console.log('total salary');
total=employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(total);

