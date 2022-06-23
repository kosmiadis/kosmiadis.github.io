const headerContainer = document.querySelector('.header-container')
const totalCountriesSpan = headerContainer.querySelector('span')
totalCountriesSpan.textContent = returnTotalNumberOfCountries()
const countriesSearch = headerContainer.querySelector('input')

countriesSearch.addEventListener('input', e => {
    countriesContainer.innerHTML = ''
    let search = countriesSearch.value
    const searchingCriteriaCountries = countries_data.filter((country) => country.name.toUpperCase().includes(search.toUpperCase()))
    createCountries(searchingCriteriaCountries)
})

function returnTotalNumberOfCountries () {
    let total = 0
    for (const country of countries_data) {
        total++
    }

    return total
}



