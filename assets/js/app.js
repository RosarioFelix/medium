window.onload=function(){
var body = document.getElementById('body');

var cabezera = document.createElement("header");
cabezera.classList.add("header");
body.appendChild(cabezera);

var contenedorHeader = document.createElement("div");
contenedorHeader.classList.add("cont-header");
cabezera.appendChild(contenedorHeader);

var medium = document.createElement("div");
medium.classList.add("medium");
contenedorHeader.appendChild(medium);

var logo = document.createElement("img");
logo.classList.add("img-logo");
logo.setAttribute("src", "assets/img/medi.png")
medium.appendChild(logo);

var raya = document.createElement("a");
raya.classList.add("raya");
raya.innerText="|";
medium.appendChild(raya);

var foto = document.createElement("img");
foto.classList.add("img-foto");
foto.setAttribute("src", "assets/img/foto.png")
medium.appendChild(foto);

}
