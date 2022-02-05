import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities()
  console.log("From init")
  console.log("http://43.204.0.46:8082/cities")
  console.log(cities)
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}
//Implementation of fetch call
async function fetchCities() {
  try{
    let response = await fetch(config.backendEndpoint+"/cities");
    let data = await response.json()
    return data
  }
    catch(err)
    {
    return null
  } 
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  let div =document.createElement("div")
  div.className = "col-6 col-lg-3 mb-2";
  div.innerHTML = `
            <a href="pages/adventures/?city=${id}" id="${id}">
              <div class="tile">
                <div class="tile-text text-center">
                  <h5>${city}</h5>
                  <p>${description}</p>
                </div>
                <img class="img-responsive" src="${image}" /></div>
            </a>
          `;
  document.getElementById("data").appendChild(div);

  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

}

export { init, fetchCities, addCityToDOM };
