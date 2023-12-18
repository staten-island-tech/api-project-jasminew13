import '../css/style.css'
import { DOMselectors } from './dom';

const URL = `https://data.cityofnewyork.us/resource/uiay-nctu.json`;

 async function getData(){
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  data.forEach(a => {
    DOMselectors.container.insertAdjacentHTML("afterend", `
    <div class="card">
    <p><h3 class="organization">${a.orgname}</h3></p>
   <p><h3 class="avenue">${a.apprfromst}</h3></p> 
    <p><h3 class="street">${a.appronstre}      </h3></p>
    <h2 class="theborough">${a.boroughname}</h2>
  </div>`)}
      )};
        ; 
getData(URL)

  

function clearscreen(){
  DOMselectors.container.innerHTML= "";
};

let values = document.querySelectorAll(".brooklyn, .bronx, .manhattan, .queens, .statenisland");

values.forEach((value) => value.addEventListener("click", function(){
  let type = value.textContent;
  let newArr = URL.filter((data) => URL.boroughname === type);
  clearscreen();
  data();
  getData(newArr);
}));