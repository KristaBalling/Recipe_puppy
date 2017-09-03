let targetLocation = document.querySelector("#container");
console.log(targetLocation);
let searchBox = document.querySelector("input");
searchBox.addEventlistener('click', search);



fetch("http://recipepuppyproxy.herokuapp.com//api/?q=omlet")
   .then(function (response){
  return response.json();
})
.then(function (data) {
  console.log(data);
  for (let i=0; i < data.results.length; i++){
    let recipes =

 `<div>
 <img src= "${data.results[i].thumbnail}">
 <a href="${data.results[i].href}">${data.results[i].title}</a>
 </div>
 `;
 targetLocation.innerHTML += recipes;


 link.setAttribute("href", <a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150"></a>)
 }

})




let targetLocation = document.querySelector("body");
targetLocation.innerHTML = `<h1>internal company directory</h1>`

for (let i=0; i < customers.results.length; i++){
targetLocation.innerHTML += `
<div class= "profiles">
<img src= ${customers.results[i].picture.large}>
<p class="names"> ${customers.results[i].name.first} ${customers.results[i].name.last}</p>
<p class="email">${customers.results[i].email}</p>
<p class="street">${customers.results[i].location.street}</p>
<p class="city">${customers.results[i].location.city}</p>
<p class="phone">${customers.results[i].phone}</p>
<p class="ssn">${customers.results[i].id.value}</p>
</div>`
}
