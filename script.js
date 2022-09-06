const cors = "https://noroffcors.herokuapp.com/";
let url = "https://www.geek.no/noroff/stuff/restauranter.json";

let htmlList = document.querySelector("#myList");

async function getData(prefix, data) {
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

getData(cors, url);

/**
 * Function to show content on html list
 * not universal, but might get updated
 * @param {object} data the Data you get from the api
 * @param {object} htmlTarget the place you want the data to be listed to
 * @example
 * //add some content and location
 * showData(someData, htmlLocation)
 * // input will be looped and output consists of <li> elements
 */
function showData(data, htmlTarget) {
  let html = "";

  console.log(data);
  console.log(htmlTarget);
  for (restaurant of data.restaurants) {
    let branch = "";
    let address = "";
    let url = "";
    if (restaurant.branch && !null) {
      branch = restaurant.branch;
    }
    if (restaurant.address && !null) {
      address = restaurant.address;
    }
    if (restaurant.url && !null) {
      url = `<a href="${restaurant.url}">Website </a>`;
    }
    console.log(restaurant);
    html += `<li> <h2>${restaurant.name}</h2> ${branch} ${address} ${url}  </li>`;
  }
  htmlList.innerHTML += html;
}
