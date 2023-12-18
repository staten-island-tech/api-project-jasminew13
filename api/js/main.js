import '../css/style.css'
import { DOMselectors } from './dom';

const URL = `https://data.cityofnewyork.us/resource/uiay-nctu.json`;

/*  async function getData(){
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
getData(URL) */

async function getData(URL){
  try {
      //requesting a response REST API's
      const response = await fetch(URL);
      if (response.status != 200) {
          throw new Error (response.statusText);
      }
      //convert response to JSON
      const data = await response.json();
      data.forEach(a => {
        DOMselectors.container.insertAdjacentHTML("afterend", `
        <div class="card">
        <p><h3 class="organization">${a.orgname}</h3></p>
       <p><h3 class="avenue">${a.apprfromst}</h3></p> 
        <p><h3 class="street">${a.appronstre}      </h3></p>
        <h2 class="theborough">${a.boroughname}</h2>
      </div>`)})
      
  } catch (error) {
      console.log(error,"uh oh");
      document.querySelector("h1").textContent = "nono"
  }
}
getData(URL);

function clearscreen(){
  DOMselectors.container.innerHTML= "";
};

let values = document.querySelectorAll(".brooklyn, .bronx, .manhattan, .queens, .statenisland");

values.forEach((value) => value.addEventListener("click", function(){
  let type = value.textContent;
  let newArr = URL.filter(() => URL.boroughname === type);
  clearscreen();
  getData(newArr);
}));