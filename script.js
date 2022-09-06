const cors ="https://noroffcors.herokuapp.com/";
let url="https://www.geek.no/noroff/stuff/restauranter.json";

let htmlList = document.querySelector("#myList");




async function getData(prefix, data){
  await fetch(prefix + data)
  .then(function(response){
    console.log(response);
    return response.json();
  })
  .then(function(formatedResponse){
    console.log(formatedResponse);
    showData(formatedResponse, htmlList);
  })
  .catch(error => console.error(error))
}

getData(cors, url);

/**
 * 
 * @param {object} data the Data you get from the api
 * @param {object} htmlTarget the place you want the data to be listed to
 */
function showData(data, htmlTarget){
  let html = ""
  console.log(data);
  console.log(htmlTarget);
  for(restaurant of data.restaurants){
    console.log(restaurant);
    html += `<li> <h2>${restaurant.name}</h2> ${restaurant.branch} ${restaurant.address} <a href="${restaurant.url}">Link to webpage</a> </li>`
  }
  htmlList.innerHTML += html;
}