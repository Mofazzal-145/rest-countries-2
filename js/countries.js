const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data) )
}

const displayCountries = (countries) => {
    // console.log(countries[0]);
    const allCountryHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountryHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountryHTML.join(' '); //add-space-between-element

}

getCountryHTML = country =>{
    return `
        <div class = "country">
           <h2>${country.name.common} </h2>
           <img src = "${country.flags.png}">
        </div>
    `
}

loadCountries()

