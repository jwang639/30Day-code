// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ["an", "an", "an", "a ", "ar"]

// let pattern = /^[A-Z][a-z]{3,12}$/;
// let name = 'Asabeneh,..';
// let result = pattern.test(name)

// console.log(result) // true

// let str = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
// let number = str.match(/-?\d+/gm)
// console.log(number);

// function is_valid_variable(Str){    //function to check if the if a string is a valid JavaScript variable
//     let pattern = /^[A-Za-z]/
//     let result = pattern.test(Str)
//     console.log(result);
// }

// is_valid_variable('1first') 
paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'
sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?"
//clean the string
function cleanText(sentence){
    return sentence.replace(/[.,!@#$%^&*();:?]/g, '')
}

function tenMostFrequentWords(paragraph, top){
    let table = new Array()      //this is the answer object array
    const wordArray = cleanText(paragraph).split(' ')  //split out each word into a set
    const wordsSet = new Set(wordArray)
   
    for(word of wordsSet){//use each unique word in words set and use 'match' to find out each word's count
        let regEx = new RegExp(`\\b${word}\\b`, 'g')  //use variable in regEx
        //console.log(paragraph.match(regEx).length);
        let tmp = {'word' :word, 'count': paragraph.match(regEx).length}//match will return all the matching results, so length is the count of each word
        table.push(tmp) 
    }
    table.sort(function (a, b){ //array.sort() can sort by comparing the object's properties
        return b.count - a.count
    })
    return (table.slice(0, top));//only ten Most frequent words
}
console.log(tenMostFrequentWords(paragraph, 10));
//console.log(tenMostFrequentWords(sentence, 3));
//this work on paragraph test, but it doesn't work on sentence test, idk why