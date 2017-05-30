var searchName = document.getElementById("userName");
var button = document.getElementById("btnSearch");
var user = document.getElementById("name");
var photoUser = document.getElementById("photo");
var numberOfRepo = document.getElementById("number");
var request = new XMLHttpRequest();

function search() {
  request.open("GET", "https://api.github.com/users/" + searchName.value, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      user.innerHTML = data.name;
      photoUser.innerHTML = '<img src ="' + data.avatar_url + '">';
      numberOfRepo.innerHTML = data.public_repos;
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };


  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}
button.addEventListener("click", search);
