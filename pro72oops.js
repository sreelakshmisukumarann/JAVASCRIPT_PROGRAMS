//object oriented programming

//class

class Employee{
    //property - varabile inside the class
    empId
    empName
    empDesg
    empSalary
    //constructor - to inistialise properties
    constructor(id,ename,des,salary){
        this.empId=id
        this.empName=ename
        this.empDesg=des
        this.empSalary=salary
     }
    //methods- function inside a class
    display(){
        console.log(`\n employee id is ${this.empId} \n employeem name is ${this.empName} \n employee designation is ${this.empDesg} \n employe salary is ${this.empSalary}`);
    }
}

//object creation , new is keyword here
 emp1 = new Employee(1000,'belly','developer',25000)
 emp1.display()

 const emp2 = new Employee(1001,'max','testing',20000)
 emp2.display()