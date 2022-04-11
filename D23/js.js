const button = document.querySelector('button')
const input = document.querySelector('input')
const errorMessage = document.querySelector('p')
const div = document.querySelector('div')

button.addEventListener('click', () =>{
    let regex = /^[a-zA-Z]+$/
    if(input.value.match(regex)){
        div.innerHTML = ''
        errorMessage.textContent = 'input should be number'
        errorMessage.style.color = 'red'
    }
    if(input.value.length == '0'){
        errorMessage.textContent = 'please enter number to generate'
        errorMessage.style.color = 'red'
    }
    else{
        createNumbers()    //generate the number grid  
    }
})

function createNumbers(){
    div.innerHTML = ''
    const row = document.createElement('row')
    let count = 0
    for(let i = 0; i < input.value; i++){
        const num = document.createElement('num')
        num.textContent = i
        if(isPrime(num.textContent) == true){
            num.style.background = 'red'
        }
        else if(isEven(num.textContent) == true){
            num.style.background = 'green'
        }
        else if(isOdd(num.textContent) == true){
            num.style.background = 'yellow'
        }
        if(count == 9){
            row.appendChild(document.createElement('div'))
            count = 0
        }
        row.appendChild(num)
        count++
    }
    div.appendChild(row)
}

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