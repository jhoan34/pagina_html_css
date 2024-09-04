let array = [
    "../client/img/j.png", "../client/img/j.png", "../client/img/j.png", "../client/img/j.png", "../client/img/gh.jpeg", "../client/img/gh.jpeg", "../client/img/gh.jpeg", "../client/img/gh.jpeg",
];
const elementosImg = document.querySelectorAll(".img5");
elementosImg.forEach((ele, index) => {
    ele.src = array[index];
});
// Multiplica el total de imágenes por el porcentaje de desplazamiento
let total = 0;

document.querySelector(".btns").addEventListener("click", e => {
    if (e.target.id === "ade") {
        let carruselesWidth = document.querySelector("#men").offsetWidth;
        if (carruselesWidth === 302 || carruselesWidth === 300) {
            if (total === -87.5) {
                return;
            } else {
                total -= 12.5;
                document.querySelector(".carruseles").style.transform = `translateX(${total}%)`;
                console.log(total);
            }
        } else if (carruselesWidth === 502 || carruselesWidth === 500) {
            if (total === -75) {
                return;
            } else {
                total -= 25;
                document.querySelector(".carruseles").style.transform = `translateX(${total}%)`;
                console.log(total);
            }
        } else {
            if (total === -50) {
                return;
            } else {
                total -= 50;
                document.querySelector(".carruseles").style.transform = `translateX(${total}%)`;
                console.log(total);
            }
        }
    }

    if (e.target.id === "at") {
        let carruselesWidth = document.querySelector("#men").offsetWidth;
        if (carruselesWidth === 302 || carruselesWidth === 300) {
            if (total === 0) {
                return;
            } else {
                total += 12.5;
                document.querySelector(".carruseles").style.transform = `translateX(${total}%)`;
                console.log(total);
            }
        } else if (carruselesWidth === 502 || carruselesWidth === 500) {
            if (total === 0) {
                return;
            } else {
                total += 25;
                document.querySelector(".carruseles").style.transform = `translateX(${total}%)`;
                console.log(total);
            }
        } else {
            if (total === 0) {
                return;
            } else {
                total += 50;
                document.querySelector(".carruseles").style.transform = `translateX(${total}%)`;
                console.log(total);
            }
        }
    }
});



let arrayP = [
    "../client/img/j.png", "../client/img/j.png", "../client/img/j.png", "../client/img/j.png", "../client/img/d.jpeg", "../client/img/d.jpeg", "../client/img/d.jpeg", "../client/img/d.jpeg",
];
const elementos2 = document.querySelectorAll(".muj");
elementos2.forEach((element, i) => {
    element.src = arrayP[i];
});

let vol = 0;

document.querySelector(".lll").addEventListener("click", e => {
    if (e.target.id === "a") {
    
        let carruselesWidth = document.querySelector("#woman").offsetWidth;
        if (carruselesWidth === 300) {
            if(vol === -87.5 ){
                return
            }else{
                vol -= 12.5;
                document.querySelector(".carruseles2").style.transform = `translateX(${vol}%)`;
                console.log(vol);
            }
    
        }else if(carruselesWidth === 500){
            if(vol === -75 ){
                return
            }else{
                vol -= 25;
                document.querySelector(".carruseles2").style.transform = `translateX(${vol}%)`;
                console.log(vol);
            }
        }else{
            if(vol === -50){
                return
            }else{
                vol -= 50;
                document.querySelector(".carruseles2").style.transform = `translateX(${vol}%)`;
                console.log(vol);
            }
          
        }
    }
    

    if (e.target.id === "A") {
        let carruselesWidth = document.querySelector("#woman").offsetWidth;
        if (carruselesWidth === 300) {
            if(vol === 0 ){
                return
            }else{
                vol += 12.5;
                document.querySelector(".carruseles2").style.transform = `translateX(${vol}%)`;
                console.log(vol);
            }
    
        }else if(carruselesWidth === 500){
            if(vol === 0 ){
                return
            }else{
                vol += 25;
                document.querySelector(".carruseles2").style.transform = `translateX(${vol}%)`;
                console.log(vol);
            }
        }else {
            if(vol === 0){
                return
            }else{
                vol += 50;
                document.querySelector(".carruseles2").style.transform = `translateX(${vol}%)`;
                console.log(vol);
            }
          
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let elemento = document.querySelector("#men");
    let elemento1 = document.querySelector("#woman");
    let ancho = elemento.getBoundingClientRect().width;
    let ancho1 = elemento1.getBoundingClientRect().width;
    console.log("Ancho del elemento:", ancho, "y" , ancho1 );
});
