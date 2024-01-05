import '../css/style.css'
import { DOMselectors } from './dom';

const URL = `https://data.cityofnewyork.us/resource/uiay-nctu.json`
let form = document.forms['boroughselect'];
let nyc = form.boroughs;
let optionie = form.boroughs.options;
form.onsubmit = function(e){
  e.preventDefault();
  let optionval = this.boroughs.value
  optionval.forEach((option) => option.addEventListener("select", function(){
    let type = option.textContent;
    let newArr = data.filter((data) => data.boroughname === type);
    getData(newArr);
    clearFields();}));
}
async function getData(){
  try {
      //requesting a response REST API's
      const response = await fetch(URL);
      if (response.status != 200) {
          throw new Error (response.statusText);
      }
      //convert response to JSON
      const data = await response.json();
      data.forEach(a => {
        DOMselectors.container.insertAdjacentHTML("beforeend", `
        <div class="card">
        <p><h2 class="organization">${a.orgname}</h2></p>
       <p><h3 class="avenue">${a.apprfromst}</h3></p> 
        <p><h3 class="street">${a.appronstre}      </h3></p>
        <h2 class="theborough">${a.boroughname}</h2>
      </div>`)}); 
  } catch (error) {
      console.log(error,"uh oh");
      document.querySelector("h1").textContent = "nono"
  }
}
getData(URL)
 /*    let options = document.getElementById("#borough-select");
    
    options.forEach((option) => option.addEventListener("select", function(){
      let type = option.textContent;
      let newArr = data.filter((data) => data.boroughname === type);
      getData(newArr);
      clearFields();}))
 */

/*  DOMselectors.Brooklyn.addEventListener("select", function () {
        clearFields(); 
      const printbk = data.filter((dat) => dat.boroughname === "Brooklyn");
      printbk.forEach(a => 
            DOMselectors.container.insertAdjacentHTML("afterend", `
            <div class="card">
            <p><h2 class="organization">${a.orgname}</h2></p>
           <p><h3 class="avenue">${a.apprfromst}</h3></p> 
            <p><h3 class="street">${a.appronstre}      </h3></p>
            <h2 class="theborough">${a.boroughname}</h2> `))
       }); */
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


