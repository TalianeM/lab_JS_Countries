
let apiData; 

const countriesList = document.querySelector("#countriesList");

async function setup(){
    fetchRestCountries();
    countriesList.innerHTML = "";
    apiData = await fetchRestCountries()
    apiData.map(country => {
        createNewCountryElement (country)
        
})
} 
    const fetchRestCountries = async () => {
        const response = await fetch ("https://restcountries.com/v3.1/all")

        const data = await response.json();

        return data;
        
    }   

    setup();

    function createNewCountryElement (country) {
        const newListItem = document.createElement("li")
        newListItem.innerText = `${country.name.common} population: ${country.population}`
        countriesList.appendChild(newListItem);
    }