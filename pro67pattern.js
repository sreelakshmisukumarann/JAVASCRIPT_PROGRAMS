//w.a.p to print the first the recursive letter -B
//pattern - ABBBAB

pattern='ABBAABAB'

character= Array.from(pattern)
console.log(character);

obj={}

for(let char of character){ //a //b //b
    if(char in obj)
    {
        console.log('firt recursive letter:',char); //b
        break
    }
    else{
        obj[char]=1 //a:1 //b:1
    }
}

