/**@description cors to help get access to some api */
const cors = "https://noroffcors.herokuapp.com/";
/**@description the api the data comes from */
let url = "https://www.geek.no/noroff/stuff/restauranter.json";

/**@description the html target where list elements will be added to */
let htmlList = document.querySelector("#myList");



/**
 * used to fetch api and send to another function
 * @param {string} [prefix] optional cors to access api
 * @param {string} data link to api
 * @example
 * ```js
 * //to get the wanted api
 * const cors = "https://noroffcors.herokuapp.com/";
 * let url = "https://www.geek.no/noroff/stuff/restauranter.json";
 * getData(cors, url);
 * // function will get the api and send it to
 * showData(formatedResponse, targetHtml)
 * ```
 */
async function getData(prefix="", data) {
  await fetch(prefix + data)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (formatedResponse) {
      console.log(formatedResponse);
      showData(formatedResponse, htmlList);
    })
    .catch((error) => console.error(error));
}

/**
 * used to get data from an object, so it is easy to access later
 * @param {array} data a list of restaurants and info about them
 * @returns {array} array of variables and html
 * @example 
 * ```js
 * //when you want to get access to data and not write the whole json object
 * let formatedData = formatData(list.restaurant[i])
 * returns ["bella napoli", "nesttun", "nesttunvegen 1", "<a href="www.bellanapoli.no">Website</a>"]
 * ```
 */

function formatData(data){
    let branch = "";
    let address = "";
    let url = "";
    if (data.branch && !null) {
      branch = data.branch;
    }
    if (data.address && !null) {
      address = data.address;
    }
    if (data.url && !null) {
      url = `<a href="${data.url}">Website </a>`;
    }
    console.log(data);
    console.log(data.name, branch,address,url)
    return [data.name, branch, address, url]
}

getData(cors, url);

/**
 * Function to show content on html list
 * not universal, but might get updated
 * @param {array} data the Data you get from the api
 * @example
 * ```js
 * //used to display specific content in a list
 * //add some content and location
 * showData(someData, htmlLocation)
 * //adds listitems to htmlTarget (ul or ol)
 * ```
 */
function showData(data) {
  let returnedData = []
  let html = "";
  for(let i = 0; i < data.restaurants.length; i++){
  returnedData = formatData(data.restaurants[i])
  console.log(returnedData);
  html += `<li> <h2>${returnedData[0]}</h2> ${returnedData[1]} ${returnedData[2]} ${returnedData[3]}  </li>`;
 }  
  htmlList.innerHTML += html;}
