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
// another option
const getCountryHTML = ({name, flags, area, region}) =>{

   return `
       <div class = "country">
          <h2>${name.common} </h2>
          <p> Area: ${area}</p>
          <p> Continent: ${region}</p>
          <img src = "${flags.png}">
       </div>
   `
}

// another way 
/*  
const getCountryHTML = country =>{
     // option
     const {name, flags} = country;
    return `
        <div class = "country">
           <h2>${name.common} </h2>
           <img src = "${flags.png}">
        </div>
    `
} 
*/

// another way
 /*
  const getCountryHTML = country =>{
    return `
        <div class = "country">
           <h2>${country.name.common} </h2>
           <img src = "${country.flags.png}">
        </div>
    `
}
 */
loadCountries()

