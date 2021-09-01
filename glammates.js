const GlamMatesUrl = "https://api.yelp.com/v3/businesses/search?term=salon&location=";
const API_KEY = "OjHnIZWm4ZLZKVa99o5eN-KsQABLLYnkLIxJb2eBqG2UPhvrB-sK5CcFKbJRUSW2ThJgHC2ieNDG0hAKvH8kaBLus5VwVw5ZYhLTF4o2VAgBk7IBG3Bobsor8FksYXYx";
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`




function searchSalons () {
    let input=document.querySelector("#search")
    let input=document.getElementById("search").value;
    console.log(city);
    const response= axios.get(GlamMatesUrl +input.value)
    .then (function(response){
        console.log(reponse);
    });
}
function renderList(response){
    console.log(response.data);
    while (document.querySelector(".salon-list").firstChild){
      document.querySelector(".salon-")  
    }
}



// function searchSalons(){
//     let input=document.getElementById("search").value;
//     console.log(city);
//     const response= axios.get(GlamMatesUrl+input.value)
//     .then(function(response){
//         console.log(response);
//         renderList(response);

//     }}
let input=document.querySelector("#seach")
function searchSalons(){
    let city=document.getElementById("search").value;
    console.log(city);
    const response= axios.get(GlamMatesUrl+input.value)
    .then(function(response){
        console.log(response);
        // renderList(response);
    });
}


document.getElementById("salonbutton").addEventListener("click",searchSalons);

