const button = document.querySelector('button')
button.addEventListener('click', () => {
    const planet = document.querySelector('select').value
    const input = document.querySelector('input').value
    const error = document.querySelector('p')
    error.innerHTML = ''
    if(input.length == 0){
        error.style.color = 'white'
        error.style.fontSize = '25px'
        error.innerHTML = 'mess is required'
    }
    else{
        const result = document.querySelector('result')
        result.innerHTML = ''
        let ans = input * 9.8 * gravity(planet)
        result.style.color = 'white'
        result.innerHTML = 'The weight of the object on ' + planet + 'is: ' + ans + ' N'
    }


})

function gravity(planet){
    switch(planet){
        case 'Mercury': return  0.0553
        break;
        case 'Venus': return 0.815
        break;
        case 'Earth': return 1
        break;
        case 'Mars': return 0.107
        break;
        case 'Pluto': return 0.0022
        break;		
    }
}


const title = document.querySelector('h1')
title.style.color = 'white'