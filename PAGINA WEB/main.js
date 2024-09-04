let active = false;

const modo = document.querySelector("#as");
const caja = document.querySelector(".mn")

modo.addEventListener("click", (e) => {
  e.preventDefault();

  const body = document.body;

  active = !active;

  if(active) {
    body.style.backgroundColor = "white";
    caja.style.backgroundColor = "black";

   

  } else {
    body.style.backgroundColor = ""; 
    caja.style.backgroundColor = "";


  }

});



if (localStorage.visitas) {
  localStorage.visitas = Number(localStorage.visitas) + 1;
} else {
  localStorage.visitas = 1;
}

console.log('Número total de visitas: ' + localStorage.visitas);

