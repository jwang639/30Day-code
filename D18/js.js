// // Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.length > 0) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })
  
//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     dataJSON = JSON.stringify(data, ['name', 'capital', 'languages', 'population', 'area'], 4)
//     //console.log(dataJSON)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens


//const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// fetch(catsAPI)
//   .then(response => response.json())
//   .then(data => {
//         catWeights = data.forEach(element => {
//             console.log(element.name + ': ' + element.weight.metric);
//         });
//     }
//   )
//   .catch(error => console.log(error))

//fetch the data from countries url and find the ten largest countries
const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let sizeArray = new Array()
        //let languagesSet = new Set()
        data.forEach(element => {   //from array data, use below method to get name and area, convert to object array
            let sizeObject = {'name': element.name, 'area': element.area}
            sizeArray.push(sizeObject)
            sizeArray.sort(function (a, b){     //sort array by the value of area
                return b.area - a.area
            })
        });
        //console.log(sizeArray.slice(0, 10));    //find the ten largest
        //console.log(languagesSet);
    }) 
    .catch(error => console.log(error))

