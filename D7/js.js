// function greetings(name = 'Peter') {
//     let message = `${name}, welcome to 30 Days Of JavaScript!`
//     return message
//   }
  
//   console.log(greetings())
//   console.log(greetings('This is input'))

//   function calculateAge(birthYear, currentYear = 2019) {
//     let age = currentYear - birthYear
//     return age
//   }
  
//   console.log('Age: ', calculateAge(1819, 1919))

// const fullName = (first, second) => `${first} ${second}`
// console.log(fullName('Jiahao', 'Wang'))

// let sum = (a, b) => a + b
// console.log(sum(1, 3));

// const showDateTime = (d) =>{
//     return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
// }
// console.log(showDateTime(new Date()));

// let xX, yY
// function swap(x, y){
//     let tmp = x
//     xX = y
//     yY= tmp
// }
// swap(4, 5)
// console.log(`x: ${xX} y: ${yY}`);

// function reverseArray(a){
//   let ary = new Array()
//   for(let i = a.length - 1; i > 0; i--){
//     ary.push(a[i])
//   }
//   return ary
// }
// console.log(reverseArray([1,2,3,4,5]));


// let ary = [1,2,3,4,5]
// function removeItem(a){
//   let copy = ary.slice()
//   copy.splice(a, 1)
//   return copy
// }
// console.log(removeItem(3));

// const sum1 = (...args) =>{//for multiple arguments
//   let sum = 0
//   for(const ele of args){
//     sum += ele
//   }
//   return sum
// }
// console.log(sum1(1,2,3,53))

// const userIdGeneratedByUser = ()=>{
//   let numberOfChar = prompt("Number of characters")
//   let numberOfID = prompt("Number of ids")
//   let ans = new Array()
//   console.log("NumberofChar: " + numberOfChar);
//   console.log("NumberofIDs: " + numberOfID);
//   const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

//   for(let i = 0; i < numberOfID; i++){
//     let tmp = ''
//       for(let j = 0; j < numberOfChar; j++){
//         let index = Math.floor(Math.random() * table.length)
//         tmp += table.charAt(index) //random from 0-1 floating number 
//       }
//     ans.push(tmp)
//   }
//   console.log(`'${ans.join()}'`)
// }
// userIdGeneratedByUser();

let str = 'abc'
let STR = str.toLocaleUpperCase() //string is immutable, use this way to assign to new string
console.log(STR);

let ary = new Array()
const sevenrandom = () => {
  for(let i = 0; i < 7; i++){
    let tmp = Math.floor(Math.random() * 10)
    if(ary.includes(tmp)) {
      i--
      continue
    }
    else ary.push(tmp)
  }
  return ary
}
console.log(sevenrandom());



