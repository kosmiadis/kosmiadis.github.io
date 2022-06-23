const mainContainer = document.querySelector('.main-container')
const countriesContainer = document.querySelector('.countries-container')

window.addEventListener('load', e =>{
    createCountries(countries_data)
})

function createCountries (countries_data) {

    let countryDiv
    let innerCountryDiv
    let flagImg
    let countryInfoDiv

    let nameP
    let populationP
    let populationSpan
    let languagesP
    let languagesSpan

    for (const country of countries_data) {
        countryDiv = document.createElement('div')
    
        countryDiv.setAttribute('class', 'country')
        
        innerCountryDiv = document.createElement('div')
        innerCountryDiv.setAttribute('id', 'inner-country')
        
        countryDiv.appendChild(innerCountryDiv)

        flagImg = document.createElement('img')
        flagImg.src = country.flag

        countryInfoDiv = document.createElement('div')
        countryInfoDiv.setAttribute('class', 'country-info')

        nameP = document.createElement('p')
        nameP.textContent = country.name
        nameP.setAttribute('class', 'name')
        
        populationP = document.createElement('p')
        populationP.setAttribute('class', 'population')
        populationP.textContent = 'Population: '
        populationSpan = document.createElement('span')
        populationSpan.textContent = country.population
        populationP.appendChild(populationSpan)

        languagesP = document.createElement('p')
        languagesP.setAttribute('class', 'languages')
        languagesP.textContent = 'Languages: '
        languagesSpan = document.createElement('span')
        languagesSpan.textContent = country.languages.join(', ')
        languagesP.appendChild(languagesSpan)

        countryInfoDiv.appendChild(nameP)
        countryInfoDiv.appendChild(populationP)
        countryInfoDiv.appendChild(languagesP)
        

        innerCountryDiv.appendChild(flagImg)
        innerCountryDiv.append(countryInfoDiv)

        countriesContainer.appendChild(countryDiv)

    }
}



