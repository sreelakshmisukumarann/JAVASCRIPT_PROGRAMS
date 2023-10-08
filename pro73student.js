class Student{
    stuId
    stuName
    studBatch
    stuLocation

    constructor(id,sname,bh,location){
        this.stuId=id
        this.stuName=sname
        this.studBatch=bh
        this.stuLocation=location
        //this.display()

    }
    display(){
        console.log(`\n student id : ${this.stuId} \n student name : ${this.stuName} \n student batch : ${this.studBatch} \n student location : ${this.stuLocation} \n`);
    }
}

s1= new Student(101,'lakshmi','mca','thrissur')
s1.display()

s2= new Student(102,'vineeth','mca','palakkad')
s2.display()