//change the tasks status
const ulList = document.querySelectorAll("li")
ulList.forEach(ul =>{
    if(ul.textContent.includes("Challenge Done")){
        ul.style.background = 'green'
    }
    else if(ul.textContent.includes("Challenge Ongoing")){
        ul.style.background = 'yellow'
    }
    else if(ul.textContent.includes("Challenge Coming")){
        ul.style.background = 'red'
    }
})


//real time clock
function currentTime(){
    const today = new Date()
    let date = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()
    let hour = today.getHours()
    let mins =today.getMinutes()
    let seconds = today.getSeconds()

    hour = (hour < 10)? '0' + hour : hour
    mins = (mins < 10)? '0' + mins : mins
    seconds = (seconds < 10)? '0' + seconds : seconds

    //change month to actual word
    switch(month){
        case 1: month = 'January'
        break;
        case 2: month = 'February'
        break;
        case 3: month = 'March'
        break;
        case 4: month = 'April'
        break;
        case 5: month = 'May'
        break;
        case 6: month = 'June'
        break;
        case 7: month = 'July'
        break;
        case 8: month = 'August'
        break;
        case 9: month = 'September'
        break;
        case 10: month = 'October '
        break;
        case 11: month = 'November'
        break;
        case 12: month = 'December'
        break;
    }
    
    let colorPool = ['green', 'red', 'blue', 'black', 'white', 'pink', 'purple', 'yellow', 'brown', 'grey']
    function changeColor(){
       let colorIndex = Math.floor(Math.random() * 10)
       return colorIndex 
    }

    let time = `${month} ${date}, ${year} ${hour}:${mins}:${seconds}`
    document.querySelector('clock').innerText = time
    document.querySelector('clock').style.background = colorPool[changeColor()]
    
    //use timeout function to update every second
    let t = setTimeout(function(){currentTime()}, 1000)
}
currentTime()