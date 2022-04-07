// // let firstTitle = document.querySelector('h1') // select the first available h2 element
// // let firstTitle1 = document.querySelector('#first-title') // select id with first-title
// // let firstTitle2 = document.querySelector('.title') // select the first available h2 element with class title
// // console.log(firstTitle);
// // console.log(firstTitle1);
// // console.log(firstTitle2);

// const titles = document.querySelectorAll('h1')
// //another way to setting an attribute
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// //another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.add('title', 'header-title')

// //const titles = document.querySelectorAll('h1')
// titles[3].textContent = 'Fourth Title'

// //allTitles.forEach(title => console.log(title))
// //const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class

// console.log(titles[3]);


// const lists = `
//     <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>`
//   const ul = document.querySelector('ul')
//   ul.innerHTML = lists


// const firstElements = document.querySelector('h1')
// const secondWay = document.querySelector('#third-title')
// console.log(firstElements);
// console.log(secondWay);

const ulList = document.getElementsByTagName('ul')
for(element of ulList){
    element.style.color = 'green'
}