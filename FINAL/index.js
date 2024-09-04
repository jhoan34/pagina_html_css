let active = false;

const modo = document.querySelector("#cla");

modo.addEventListener("click", (e) => {
  e.preventDefault();

  const body = document.body;

  active = !active;

  if(active) {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = ""; 
  }

});