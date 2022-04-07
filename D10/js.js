// // let a = [1, 2, 3, 4, 5]
// // let b = [3, 4, 5, 6]
// // let c = [...a, ...b]

// // let A = new Set(a)
// // let B = new Set(b)
// // let C = new Set(c)

// // console.log(C)

// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]
//   const map = new Map(countries)
//   console.log(map)
//   console.log(map.size)
//   console.log(map.get('Finland'));

let emptySet = new Set()
console.log(emptySet);

for(let i = 0; i < 11; i++){
    emptySet.add(i)
}
console.log(emptySet);

emptySet.delete(1)
console.log(emptySet);

emptySet.clear()
console.log(emptySet);

const fiveElements = ['a', 'b', 'c', 'd', 'e']
let fiElements = new Set(fiveElements)
console.log(fiElements);

const countries = ['Finland', 'Sweden', 'Norway']
let exercise6 = new Set()
for(country of countries){
    exercise6.add([country, country.length])
}
console.log(exercise6);

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]

// let C = new Set(c)
// console.log(C);

let A = new Set(a)
let B = new Set(b)
let C = a.filter(number => B.has(number))
console.log(C);

