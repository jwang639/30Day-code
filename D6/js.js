let sharp = ''
for(let i = 0; i < 7; i ++){
    sharp = sharp + '#'
    console.log(sharp);
}


let first = 0
let result = 0
while(first <= 10){
    result = first * first
    console.log(`${first} x ${first} = ${result}`);
    first++
}

console.log(`i    i^2   i^3`);
for(let i = 0; i < 11; i ++){
    console.log(`${i}    ${Math.pow(i, 2)}    ${Math.pow(i, 3)}`);
}

let countries = ["ALBANIA", "DENMARK","BOLIVIA", "CANADA", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let copiedCountries = countries.slice(); //The slice() method returns a shallow copy without reference
let sortedCountries = copiedCountries.sort()
console.log(countries);
console.log(sortedCountries);
let containLand = []
let string = countries[0]
for(let i = 0; i< countries.length; i++){
    if(countries[i].includes('LAND'))
    containLand.push(countries[i])
    if(countries[i].length > string.length)
    string = countries[i]
}
console.log(containLand);
console.log(string);

