fetch("http://recipepuppyproxy.herokuapp.com//api/?q=omlet")
   .then(function (response){
  return response.json();
})
.then(function (data) {
  console.log(data);

})
