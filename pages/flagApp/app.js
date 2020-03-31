const countriesList = document.getElementById("countries");
const card = document.querySelector(".card");
const inner = document.querySelector(".inner-card");
const front = document.querySelector(".inner-card-front");
const back = document.querySelector(".inner-card-back");

let countries;

card.addEventListener('click', () => {
    card.classList.toggle('show-answer');
});

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
    
  displayCountryInfo(event.target.value);
}

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
    console.log("country", countriesData);
    
  countries = countriesData;
  let options = "";

  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);

  countriesList.innerHTML = options;
 
  countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  document.getElementById("capital").innerHTML = countryData.capital;
  console.log(countryData)
}

function refreshPage(){
  window.location.reload();
  }