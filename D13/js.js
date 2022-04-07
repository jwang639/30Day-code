// console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
// console.log(
//   '%c30 Days%c %cOf%c %cJavaScript%c',
//   'color:green',
//   '',
//   'color:red',
//   '',
//   'color:yellow',
//   ' '
// ) // log output green red and yellow text

// console.warn('This is a warning')
// console.warn(
//   'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
// )
// console.warn('Warning is different from error')

// console.error('This is an error message')
// console.error('We all make mistakes')

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// console.table(names)

// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   }
//   console.table(user)

// console.info('30 Days Of JavaScript challenge is trending on Github')
// console.info('30 Days Of fullStack challenge might be released')
// console.info('30 Days Of HTML and CSS challenge might be released')

// console.assert(4 > 3, '4 is greater than 3') // no result
// console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

// for (let i = 0; i <= 10; i += 1) {
//   let errorMessage = `${i} is not even`
//   console.log('the # is ' + i)
//   console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
// }

// const names = ['Asabeneh', 'Brook', 'David', 'John']

// const user = {
//   name: 'Asabeneh',
//   title: 'Programmer',
//   country: 'Finland',
//   city: 'Helsinki',
//   age: 250
// }


// console.group('Names')
// console.log(names)
// console.groupEnd()

// console.group('users')
// console.log(user)
// console.groupEnd()

// const countries = ['shenzhen', 'guangzhou', 'foshan']
// console.table(countries);

// const countries1 = [{'name1': 'shenzhen'},{'name2': 'guangzhou'},{'name3': 'guangzhou'}]
// console.group('countries1');
// console.log(countries1);
// console.groupEnd();

// console.assert(10 > 2*10, 'assertion message')

// console.warn('warning wanring')
// console.error('error error')

let x = 0
console.time('while loop')
while(x < 10){
    x++
}
console.timeEnd('while loop')

console.time('for loop')
for(let i = 0; i < 10; i ++){}
console.timeEnd('for loop')

const array = [1,2,3,4,56,6]
console.time('for of')
for(const num of array){}
console.timeEnd('for of')

console.time('for each')
array.forEach(num => {})
console.timeEnd('for each')






