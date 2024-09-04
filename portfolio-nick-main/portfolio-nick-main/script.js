let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("comunicacion");
        habilidades[3].classList.add("trabajo");
       
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


document.querySelector("#contactForm").addEventListener("submit", async e => {

    
    e.preventDefault();
    let nombre = document.querySelector("#a").value 
    let telefono = document.querySelector("#b").value
    let correo = document.querySelector("#c").value
    let tema = document.querySelector("#d").value


    try {
        if(nombre === "" || telefono === "" || correo === "" || tema === ""){
            document.querySelector(".men").textContent = "TIENES QUE LLENAR TODOS LOS CAMPOS"
            setTimeout(() => {
                document.querySelector(".men").textContent = ""; // Puedes cambiar a otro color o a "transparent" según tus necesidades
            }, 2000); 

            document.querySelector("#gh").style.backgroundColor = "red";
              // Después de 2 segundos, volver al color original (o transparente)
            setTimeout(() => {
                document.querySelector("#gh").style.backgroundColor = ""; // Puedes cambiar a otro color o a "transparent" según tus necesidades
            }, 2000);                       

        }else{
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    nombre: nombre,
                    telefono: telefono,
                    correo : correo,
                    tema: tema

                   
                })
            };

         
      

            let res = await fetch("https://sheet.best/api/sheets/9ae08ad6-1b69-49ba-aa0e-85164cc00547", options);                       

            if (res.status >= 200 && res.status < 300) {
                // Cambiar el color a azul
                document.querySelector("#gh").style.backgroundColor = "blue";                       

                // Después de 2 segundos, volver al color original (o transparente)
                setTimeout(() => {
                    document.querySelector("#gh").style.backgroundColor = ""; // Puedes cambiar a otro color o a "transparent" según tus necesidades
                }, 2000);                       

                // Recargar la página después del cambio de color
            
            } else {
                throw { status: res.status, statusText: res.statusText };
            }

            
    
        }

      

    } catch (err) {
        // Manejar errores durante la creación
        let message = err.statusText || "Ocurrió un error";
        document.querySelector(".car").insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    } finally {
        // Limpiar los campos independientemente de si hubo un error o no
        document.querySelector("#a").value = "";
        document.querySelector("#b").value = "";
        document.querySelector("#c").value = "";
        document.querySelector("#d").value = "";
    }


   
});


document.querySelector(".do").addEventListener("click", () => {
    const pdf  = document.querySelector("#dolowand");
    pdf.click()  
})



const img = document.querySelectorAll(".proyecto");

img.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        
        const width = document.body.offsetWidth
        console.log(width)
        if(width < 830 ){
           return 
        }else{
            
            console.log("La caja número: " + i + " ha sido presionada");
            btn.classList.toggle("m");
            btn.classList.toggle("proyecto")
            document.querySelector(".sd").classList.toggle("l")
        }
    


       
    });
});


