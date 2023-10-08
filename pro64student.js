//student objects
//check whether addrs is presnt or not i presnt if not presnt add addrs

student={
    sid:46,
    sname:'Lakshmi',
    dept:'mca',
    ph_no:9302827772,
    isvacsinates:'true'

}
console.log(student);

// "address" in student ? console.log('present'):student["address"]='Thrissur'
// console.log(student); 

//add an item to objects
Object.assign(student,{location:'Thrissur'})
console.log(student);

//to update the value of an object
student.sid+=49
console.log(student);

//deletean item
console.log(delete student.isvacsinates);
console.log(student);