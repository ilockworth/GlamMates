const GlamMatesUrl = "https://boiling-mountain-84087.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=salon&location=";
const API_KEY = "Bearer OjHnIZWm4ZLZKVa99o5eN-KsQABLLYnkLIxJb2eBqG2UPhvrB-sK5CcFKbJRUSW2ThJgHC2ieNDG0hAKvH8kaBLus5VwVw5ZYhLTF4o2VAgBk7IBG3Bobsor8FksYXYx"




async function searchSalons () {
    // let input=document.querySelector("#search")
    let input=document.getElementById("search").value;
    console.log(input);
    const response= await axios.get(GlamMatesUrl +input,{headers:{Authorization:API_KEY}})
    console.log(response.data);
    renderList(response.data.businesses);
}
function renderList(response){
    console.log(response);
    // while (document.querySelector(".salon-list").firstChild){
    //   document.querySelector(".salon-").removeChild(document.querySelector(".salon-list").firstChild)  
    // }
    // let header=document.createElement("h2");
    // header.innerText="Salon List";
    // document.querySelector(".salon-list").appendChild(header);

    for (let i=0;i<response.length;i++){
        console.log(response[i]);
        let div=document.createElement("div");
        let salon = document.createElement("p")
        let name = document.createElement("p");
        let address =document.createElement("p");
        let phone = document.createElement("p");
        salon.innerText="Name: "+response[i].name
        address.innerText="address:"+response[i].location.address1
        phone.innerText="phone:"+response[i].phone

        
        // response[i].Salon; 
        // response[i].name+"'>";
        // address.innerText="Year: "+response[i].phonenumber;
        div.appendChild(salon);
        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(phone);
        document.querySelector(".salons").appendChild(div);
    }
}



// function searchSalons(){
//     let input=document.getElementById("search").value;
//     console.log(city);
//     const response= axios.get(GlamMatesUrl+input.value)
//     .then(function(response){
//         console.log(response);
//         renderList(response);

// //     }}
// let input=document.querySelector("#seach")
// function searchSalons(){
//     let city=document.getElementById("search").value;
//     console.log(city);
//     const response= axios.get(GlamMatesUrl+input.value)
//     .then(function(response){
//         console.log(response);
        // renderList(response);
    // });
// }


document.getElementById("salonbutton").addEventListener("click",searchSalons);

