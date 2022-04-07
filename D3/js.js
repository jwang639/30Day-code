let count = 0

console.log(count++)

console.log(count);

// alert("this is an alert") dont use too much alerts, its annoying

// let number = prompt('Enter number', 'number goes here') //The prompt() method takes two arguments. 
// //The second argument is optional.
// console.log(number)

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)


console.log(typeof'10' == 10)

console.log(parseInt('9.8') == 10)

console.log(new Date().getHours())

// let base = prompt('Enter base')
// let height = prompt('Enter height')

// console.log('The area is ' + base * height)

let Name = 'Wang'

Name.length > 7
    ?console.log("Your name is long")
    :console.log("Your name is short")
    

let myAge = 250
let yourAge = 25
console.log('My age is ' + (myAge - yourAge) + ' years older than you')

// let years = prompt('Enter years')
// console.log('you live ' + years * 12 * 30 * 24 * 60 * 60 + ' seconds');

let data = new Date
console.log(data.getFullYear() + '-' + data.getMonth() + '-' + data.getDay() + ' '+ data.getHours() + ':' + data.getMinutes())

let mins = data.getMinutes() 
        mins< 9
        ?mins = '0' + data.getMinutes()
        :mins = data.getMinutes()

let hrs = data.getHours() 
        hrs< 9
        ?hrs = '0' + hrs
        :hrs = hrs

        console.log(data.getFullYear() + '-' + data.getMonth() + '-' + data.getDay() + ' '+ `${hrs}` + ':' + `${mins}`)
