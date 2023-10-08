//method overriding

class A{
    methoda(){
        console.log('parent class');
    }
}
class B extends A{
    methoda(){
        console.log('child class');
    }
}

const obj = new B
obj.methoda()