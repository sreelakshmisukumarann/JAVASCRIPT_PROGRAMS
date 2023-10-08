
text='hai hello all hello world'
//w.ap to print the world count of the given text
//o/p:{hai:1,hello:2,all:1,world:1}

//algorithm

//text is convert to an array have all words
words= text.split(' ')
console.log(words);

//create an empty object
obj={}

//fetch each word from the array - for of
for(let word of words) //hai //hello //all //hello 
{
    // and check whether the given word is there in the object - in
    if(word in obj)
    {
        //if present increase the count
        obj[word]+=1
    }
    else{
        //else add the word into object
        obj[word]=1 //hai:1 //hello:1 //all:1 //hello:2
    }
}
//display
console.log(obj);

console.log(`.......................`);
//using array method
wc={}
text.split(' ').forEach(item=>item in wc?wc[item]+=1:wc[item]=1);
console.log(wc);

