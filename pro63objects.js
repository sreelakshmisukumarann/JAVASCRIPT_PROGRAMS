//objects creation

//[1000,'Neel','developer','kochi',25000,3]

employee={
    empid:1000,
    empname:"Neel",
    empdesig:"developer",
    location:"kochi",
    salary:25000,
    experience:3,
}
//display the objects
console.log(employee);

//display a perticular value - object_name.key or objects_name["key"]
console.log(`employee name is ${employee.empname}`);
console.log(`employee name is ${employee['empname']}`);

//display the salary of the employee
console.log(`employee salary is ${employee["salary"]}`);
console.log(`.............................................`);

//display only the key of the objects
for(let key in employee){
    console.log(key);
} 
console.log(`.............................................`);

//check whether employee location is present or not if present print location  else print not available

if('location' in employee)
{
    console.log('present');
    
}
else{
    console.log('not available');
}
//using ternary
console.log(`employee location is ${'location' in employee}`?'present':'not present');

//check whether employee gender is present or not if present print gender else add new key value as empgender

//SYNTAX
//add new_item into an object: object_name["key"]=value

employee["experience"]=3
console.log(employee);

"empgender" in employee?console.log('present'):employee["empgender"]='Male'
console.log(employee);