import '../css/style.css'
import { DOMselectors } from './dom';

const URL = `https://data.cityofnewyork.us/resource/uiay-nctu.json`

function add(stuff){
stuff.forEach(a => {
        DOMselectors.container.insertAdjacentHTML("beforeend", `
        <div class="card">
        <p><h2 class="organization">${a.orgname}</h2></p> 
        <p><h3 class="street">${a.appronstre}      </h3></p>
        <h2 class="theborough">${a.boroughname}</h2>
      </div>`)}); 
}

async function getData(){
  try {
      const response = await fetch(URL);
      if (response.status != 200) {
          throw new Error (response.statusText);
      }
      const newcards = await response.json();
      add(newcards)

    let buttons = document.querySelectorAll(".Brooklyn, .StatenIsland, .Queens, .Bronx, .Manhattan")

  buttons.forEach((button) => button.addEventListener("click", function (){
    let type = button.textContent;
    let newArr = newcards.filter((newcard) => newcard.boroughname === type);
    clearFields();
    add(newArr);
    console.log(newArr);
}));

    const searchbutton = document.getElementById("searchingbtn");
    searchbutton.addEventListener("click", function() {
    console.log("clickedd");
    filtering(newcards)
    })
return newcards;
  } catch (error) {
      console.log(error,"uh oh");
  }
}


function clearFields(){
  const fields = document.querySelector(".container");
  fields.innerHTML = "";
}
function filtering (newcards){
  const searchingvalue = document.getElementById("bsearch").value.trim();
  console.log("Searching Value", searchingvalue);
  const avenues = newcards.filter((newcard) => newcard.appronstre.includes(searchingvalue));
  console.log("Avenues", avenues)
  clearFields();

  if (searchingvalue.length === 0){
    DOMselectors.container.insertAdjacentHTML('beforebegin', `<h2> no streets for ${searchingvalue}</h2>`);
  } else {
    add(avenues);
  }
}
getData(URL)
/*        function addcards(arr){
        arr.forEach((s) => {
          DOMselectors.container.insertAdjacentHTML("afterend", 
          `<div class="card">
          <p><h2 class="organization">${s.orgname}</h2></p>
         <p><h3 class="avenue">${s.apprfromst}</h3></p> 
          <p><h3 class="street">${s.appronstre}      </h3></p>
          <h2 class="theborough">${s.boroughname}</h2>
      </div>`
      )})};
      addcards(URL) */


