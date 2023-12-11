import '../css/style.css'


const URL = `https://data.cityofnewyork.us/resource/uiay-nctu.json`;

 async function getData(){
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  data.forEach(data => {
    console.log(data)}
      )};
        ; 


/*    async function getData(){
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    data.forEach(data => {
      let newArr = data.filter((data) => data.boroughname === "Brooklyn")},
      getData(newArr) );}
getData(newArr) */
/*   
 DOMselectors.container.insertAdjacentHTML("afterend", 
      `<div class="container">
      <div class="card">
        <h3 class="avenue"></h3>
        <h3 class="street"></h3>
        <h2 class="theborough"></h2>
      </div>
    </div> ` */
/* const apiResponse = document.getElementById("apiresponse");
const adddata = async() => {
apiResponse.innerHTML = `${data.results.boroughname}`
}
adddata(); */
/*
  

function clearscreen(){
  DOMselectors.container.innerHTML= "";
};

let values = document.querySelectorAll("");

values.forEach((value) => value.addEventListener("click", function(){
  let type = value.textContent;
  let newArr = cats.filter((cat) => cat.genre === type);
  clearscreen();
  addCards(newArr);
})); */