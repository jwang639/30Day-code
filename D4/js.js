// let age = prompt('enter your age')
// if(age < 18){
//     age = 18 - age
//     console.log('you are ' + age + ' years to drive' );
// }

// else console.log('You are old enough to drive.');

// let a = 4
// let b = 3

// console.log(a > b ?'a is greater than b':'b');

// if(a > b) console.log('a');
// else console.log('b');

// let number = prompt('enter number')

// console.log(number % 2 == 0?(number + ' is an even number'):(number + ' is not an even number'))

// let grades = prompt('enter the grades');
// switch (true){ //!!!!remember the switch expression is compared with cases' result!!!!
//     case grades >= 80 && grades <= 100:
//         console.log('A');
//         break;
    
// }


let today = prompt('today')

switch(today){
    case ('Saturday'):
        console.log(today + 'is a weekend');
        break;
    case ('Sunday'):
        console.log(today + ' is a weekend');
        break;
    default:
        console.log(today + ' is a working day');
}


