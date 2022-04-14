console.log(countries)

const subTitle = document.getElementsByClassName("subtitle")
const graphTitle = document.getElementsByClassName("graph-title")
const buttonPopulation = document.getElementsByClassName("population")
const buttonLanguages = document.getElementsByClassName("languages")

subTitle[0].innerHTML = 'Currently, we have ' + countries.length + ' countries'

buttonPopulation[0].addEventListener('click', () => {
    graphTitle[0].innerHTML = '10 Most populated countries in the world'
    const countriesArray = tenMostPopulation()
    const graphWrapper =  document.querySelector('#stat')
    graphWrapper.innerHTML = ''
    countriesArray.forEach(country => {
       const row = document.createElement('row')
       row.innerHTML = country.name + country.population
       graphWrapper.appendChild(row)
       graphWrapper.appendChild(document.createElement('div'))
    });
})

buttonLanguages[0].addEventListener('click', () => {
    graphTitle[0].innerHTML = '10 Most spoken languages in the world'
    const graphWrapper =  document.querySelector('#stat')
    graphWrapper.innerHTML = ''
})

function tenMostPopulation(){
    countries.sort((a, b) => {
        return b.population - a.population
    })
    return countries.slice(0, 10)
}


function tenMostLanguages(){
    
}
