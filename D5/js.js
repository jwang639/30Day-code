// console.log(typeof({ skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }));

// const numbers =  Array()
// console.log(typeof numbers);

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.splice(2,2,1,2,3)
// console.log(numbers)  

const empty = new Array()

const num = [1,2,3,4,5,6]

console.log(num.length);

console.log(num[0]);

console.log(num[num.length/2 - 1]);

console.log(num[num.length - 1]);

const mixedDataTypes = new Array(true, '1', 1, undefined, null)

console.log(mixedDataTypes.length);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
// console.log(itCompanies.length);
for(let i= 0; i< itCompanies.length; i++){
    let tmp = itCompanies[i].toUpperCase()
    itCompanies[i] = tmp
}
console.log(itCompanies);

console.log(itCompanies.join(', ') + ' are big IT companies');

console.log(itCompanies.includes('IBM'));


// console.log(itCompanies.reverse());

console.log(itCompanies.slice(itCompanies.length- 3, itCompanies.length));

// itCompanies.splice(0, 1)
// console.log(itCompanies);
itCompanies.splice(0)
console.log(itCompanies);

