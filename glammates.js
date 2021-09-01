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
      document.querySelector(".salon-").removeChild(document.querySelector(".salon-list").firstChild)  
    }
    let header=document.createElement("h2");
    header.innerText="Salon List";
    document.querySelector(".salon-list").appendChild(header);

    for (let i=0;i<response.data.Search.length;i++){
        console.log(response.data.Search[i].Salon);
        let div=document.createElement("div");
        let salon = document.createElement("p")
        let name = document.createElement("p");
        let address =document.createElement("p");
        let phonenumber = document.createElement("p");
        salon.innerText="Name: "+response.data.
        Search[i].Salon; 
        
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

