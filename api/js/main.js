import '../css/style.css'



//const URLP = `pokemon/${search}`
//async asyncronous 
/* async function getData(URL){
    try {
        //requesting a response REST API's
        const response = await fetch(URL);
        if (response.status != 200) {

            throw new Error (response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
    } catch (error) {
        console.log(error,"uh oh");
        document.querySelector("h1").textContent = "nono"
    }
}
getData(URL); */

const black = `https://cataas.com/cat/black`;
const white = `https://cataas.com/cat/white`;
const ginger = `https://cataas.com/cat/ginger`;
const tabby = `https://cataas.com/cat/tabby`;
console.log(ginger)