import '../css/style.css'
//const ginger = `https://cataas.com/cat/ginger`;
//const tabby = `https://cataas.com/cat/tabby`;
//const black = `https://cataas.com/cat/black`;


const URL = `https://api.fda.gov/drug/label.json`;

async function getData(URL){
    try {
        //requesting a response REST API's
        const response = await fetch(URL);
        if (response.status !=200) {

            throw new Error (response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        document.querySelector("h1").textContent = data.results.purpose;
        console.log(data.results.purpose)
    } catch (error) {
        console.log(error, "UH OH");
        document.querySelector("h1").textContent = "nono";
    }
}
getData(URL); 

/* async function addCards (arr){
    arr.forEach((s) => {
      DOMselectors.container.insertAdjacentHTML("afterend", 
      `<div class="card">
      <h2 class="albumname"> ${s.name}</h2>
      <h2 class="artistname"> ${s.artist}</h2>
      <img src="${s.image}" alt="" class="image">
      <h3 class="price">${s.price}</h3>
  </div>`
  )})};
  

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