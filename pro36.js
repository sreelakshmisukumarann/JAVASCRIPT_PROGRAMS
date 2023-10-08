//1)w.a.p to check whether the given number is mobile number or not


// function mob(num)
// {
//     len=num.toString().length; //num.length
//     if(len==10)
//     {
//         console.log('valid number');
//     }
//     else{
//         console.log('not a valid number');
//     }

// }
// mob('12345678904')
const validatemobile = (mobile) => {
    return mobile.length==10?`${mobile} is a valid mobile number`:`${mobile} is not a valid mobile number`
}
console.log(validatemobile('1234567890'));
console.log(`.................`);



//2)w.a.p to check the given number is email id or not
// str= 'sree@gmail.com'
function mail(m)
{
    // last= '@gmail.com'
    // sub= m.substr(-10)
    // if(sub == last)
    if(m.endsWith('@gmail.com'))
    {
        console.log(`${m} is valid email id`);
    }
    else
    {
        console.log(`${m} is not valid email id`);
    }
    
}
mail('sree@gmail.com')

console.log(`.................`);



//3)w.a.p to check whether a given input start with q or not

function input(a) {
   
    if(a.startsWith("q") ||a.startsWith("Q") )
    {
        console.log('start with q');
    }
    else{
        console.log('not start with q');
    }
}
input('yukm')

//str.endsWith = to take last 

start = (word) => {
    return word.startsWith('q') || word.startsWith('Q')?'start with q':'start with not q'

}
console.log(start('hhqui'));