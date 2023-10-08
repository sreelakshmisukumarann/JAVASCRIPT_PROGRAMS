//string method

sentance='Good morning all'

//print all vowels present in the given sentance
string=[]
s=sentance.split('')
console.log(sentance);
se=[]

for(let i of s)
{
    if(i=='a' || i=='A' || i=='e' || i=='E' || i=='i' || i=='I' || i=='o' || i=='O' || i=='u' || i=='U' ){
        
        se.push(i)
    }
  
}
console.log('vowela',se);
console.log(`......................................`);

//another method

vowels=['a','e','i','o','u','A','E','I','O','U']
characters=sentance.split('')
for(let char of characters){
    if(vowels.includes(char)){
        console.log(char);
    }
}
console.log(`..........................`);

//using array methods
//convert string in to arrays
Array.from(sentance).filter(char=>vowels.includes(char)).forEach(item=>{console.log(item);})