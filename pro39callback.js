//call back function

//function definition
function greet(name,callback) // name= sree callback = callme
{
    console.log('hai',name); // hai sree
    callback() //callme() then go to callme()function
}
function callme()
{
    console.log('i am a call back function');
}
//function call
greet('sree',callme)

console.log(`...........`);
//another example

console.log('call back function');
setTimeout(()=>{console.log('call back function invoked');},2000) // this display after 2000 miliseconds