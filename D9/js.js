// //   function sayHello() {
// //     console.log('Hello')
// //   }
// //   setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// // let sum = 0;
// // const numbers = [1, 2, 3, 4, 5];
// // numbers.forEach(a => console.log(a))
// // console.log(sum)

// /*Arrow function and explicit return
// const modifiedArray = arr.map((element,index) => element);
// */
// //Example
// // const numbers = [1, 2, 3, 4, 5]
// // const numbersSquare = numbers.map((num) => num * num)
// // console.log(numbers);
// // console.log(numbersSquare)

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]

// countries.forEach(country => console.log(country))

// const upCase = countries.map(country => country.toUpperCase())
// console.log(upCase);

// const lengthCountry = countries.map(country => country.length)
// console.log(lengthCountry);

// const squareNumber = numbers.map(number => number * number)
// console.log(squareNumber);

// const rightPrice = products.map(() => products[2].price = 100, products[5].price = 100)
// console.log(products);

// const withLand = countries.filter((country) => country.includes('land'))
// console.log(withLand);

// const sixChar = countries.filter(country => country.length == 6)
// console.log(sixChar);

// const sixMChar = countries.filter(country => country.length >= 6)
// console.log(sixMChar);

// const withE = names.filter(country => country.indexOf('E') == 0)
// console.log(withE); //name start with 'E'

// const price = products.filter(product => console.log(product.price))

// function getStringLists(){
//     let stringList = new Array()
//     if(typeof(arguments) == String){
//         stringList.push(arguments)
//     }
// }

// // let tmp = 0
// // const sum = numbers.reduce(number => tmp += number)
// // console.log('sum = ' +sum)

// let tmp =''
// const sentence = countries.reduce((tmp, country) => tmp += country + ', ', tmp)
// console.log(sentence + ' are north European countries');

// let seven = new Array()
// const overSeven = names.some(name => 
//     {if(name.length > 7) seven.push(name)
// }
// )
// console.log(seven);


// const everyLand = countries.every(country => country.includes('land'))
// console.log(everyLand);

// //every VS some, every is checking all the elements are similar in one aspect and return boolean
// //some is checking if there is some elements are similar in one aspect return boolean 

// //find VS findIndex, find will return the first element which satisfies the condition
// //findIndex return the Index of the first element that satisfies the condition

// const firstSix = countries.find(country => 
//     {if (country.length == 6) return true
// }
// )
// console.log(firstSix);

// const findIndex1 = countries.findIndex(country => country.length == 6)
// console.log(findIndex1);

// const findNorway = countries.findIndex(country => country =='Norway')
// console.log(findNorway);

// const findRussia = countries.findIndex(country => country =='Russia')
// console.log(findRussia);

// let total
// const totalPrice = products.map(product => product.price).reduce((total, price)=> total += price)
// console.log(totalPrice);

// //only use reduce to calculate the total price
// // let sum
// // const totalReduce 

// function categorizeCountries(countries){
//     let land = countries.filter(country => country.includes('land'))
//     return land
// }

// console.log(categorizeCountries(countries));

//count the number of times the letter use to start with a name of a country
// let alphabet = 'ABCDEFGHIJKMNLOPQRSTUVWXYZ'
// let ans = new Array()
// for(letter of alphabet){
//     //console.log(letter);
//     const count = countries.filter(country => country[0] == letter)
//     //console.log(count);
//     ans.push({letter: letter, count: count.length})
// }
// console.log(ans);

//This is a way using map to get fist ten countries with undefined elements
// const getFirstTenCountries = countries.map((country, index ) => {if(index < 10){return country}})
// console.log(getFirstTenCountries);

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics ={
    count: function(arguments){
        return arguments.length
    },

    sum: function(arguments){
        const total = arguments.reduce((tmp, age) => tmp += age)
        return total
    },

    min: function(arguments){
        let copy = arguments.slice()
        return copy.sort()[0] //sort will change original array 
        
    },

    max: function(arguments){
        let copy = arguments.slice()
        return copy.sort()[arguments.length - 1] //sort will change original array 
        
    },

    range: function(arguments){
        return this.max(arguments) - this.min(arguments)
    },

    mean: function(arguments){
        return Math.ceil(this.sum(arguments) / arguments.length)
    },

    median: function(arguments){
        
    }
}

console.log(statistics.count(ages));
console.log(statistics.sum(ages));
console.log(statistics.min(ages));
console.log(statistics.max(ages));
console.log(statistics.range(ages));
console.log(statistics.mean(ages));






