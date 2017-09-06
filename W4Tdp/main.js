const searchBox = document.querySelector('#recipe_search');  // search box
const searchBtn = document.querySelector('#go-btn');        // search button
const resultsBox = document.querySelector('#container');   //results container


searchBtn.addEventListener('click', function () {
  const searchText = searchBox.value;

  searchFor(searchText);
});

// This function searches for the specified text and renders the results.
function searchFor(text) {
  fetch(`http://recipepuppyproxy.herokuapp.com//api/?q=${text}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (body) {
      // Get rid of all DOM elements before adding new ones.
      resultsBox.innerHTML = '';
      // Assume that 'body' is an object with a 'movies' property (an array)
      for (let i = 0; i < body.results.length; i++) {

      if (body.results[i].thumbnail === "") {

  const recipe =
        `<div>
        <img src="http://via.placeholder.com/350x150">
        <a href="https://placeholder.com">"${body.results[i].title}"</a>
        </div>`;
} else {

  `<div>
<img src="${body.results[i].thumbnail}">
<a href="${body.results[i].thumbnail}">"${body.results[i].title}"</a>
</div>`;

  resultsBox.innerHTML += recipe;
}
}
      })

      }





//
//
//  link.setAttribute("href", <a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150"></a>)
//  }

// })



//
// let targetLocation = document.querySelector("body");
// targetLocation.innerHTML = `<h1>internal company directory</h1>`
//
// for (let i=0; i < customers.results.length; i++){
// targetLocation.innerHTML += `
// <div class= "profiles">
// <img src= ${customers.results[i].picture.large}>
// <p class="names"> ${customers.results[i].name.first} ${customers.results[i].name.last}</p>
// <p class="email">${customers.results[i].email}</p>
// <p class="street">${customers.results[i].location.street}</p>
// <p class="city">${customers.results[i].location.city}</p>
// <p class="phone">${customers.results[i].phone}</p>
// <p class="ssn">${customers.results[i].id.value}</p>
// </div>`
// }
