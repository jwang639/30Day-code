//Exercises: Level 1//
let title = document.createElement('h1')
let title1 = document.createElement('h3')
let title2 = document.createElement('h3')
title2.textContent = 'Author:Wayne Wang'
title2.style.textDecoration = 'underline'
title1.textContent = '30DaysOfJavaScript:DOM Day2'
title1.style.textDecoration = 'underline'
title.innerText = 'Number Generator'
document.body.appendChild(title)
document.body.appendChild(title1)
document.body.appendChild(title2)


//check if it is prime number
function isPrime(num){
    if(num <= 1) return false
    if(num ==2) return true
    else {
        for(let j = 2; j < num; j++){
            // console.log('j=' + j);
            // console.log('num=' +num);
            // console.log(num % j);
            if(num % j == 0){
                return false
            }
        }
        return true
    }
}

function isOdd(num){
    if(num % 2 != 0) return true
}

function isEven(num){
    if(num % 2 == 0) return true
}
let number
let current = 0
for(let i = 0; i < 17; i++){
    let container = document.createElement('div')
    document.body.appendChild(container)
    for(let j = 0; j <= 5; j++){
        number = document.createElement('num')
        number.textContent = current + ' '
        if(isPrime(current) == true){
            number.style.background = 'red'
        }
        else if(isEven(current) == true){
            number.style.background = 'green'
        }
        else if(isOdd(current) == true){
            number.style.background = 'yellow'
        }
        current++
        container.appendChild(number)
    } 
}



