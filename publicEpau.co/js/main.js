import { renderHome } from "./home.js";


let productos = [];
let productosEnCarrito;
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const contenedorProductos = document.createElement("div");
contenedorProductos.id = "contenedor-productos"
contenedorProductos.classList.add("contenedor-productos")
const tituloPrincipal = document.querySelector("#titulo-principal");
const numerito = document.querySelector("#numerito");
const main = document.querySelector("#bor");
localStorage.setItem("arreglo", "")

Promise
fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        localStorage.setItem("arreglo", JSON.stringify(productos))

    });



botonesCategorias.forEach(boton => {
    boton.addEventListener("click", () => {
        aside.classList.remove("aside-visible");
    });
});

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id != "todos") {
            console.log(e.currentTarget.id)
            const productosBoton = productos.filter((producto, i) => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
            let productosfiltrados = [...productosBoton]
            localStorage.setItem("arreglo", JSON.stringify(productosfiltrados))
        }
        if(e.currentTarget.id === "home"){
            renderHome(main)


        }
        if(e.currentTarget.id === "todos") {
            localStorage.setItem("arreglo", JSON.stringify(productos))
            cargarProductos(productos);
        }
    });
});

    // Agregar eventos a los botones después de que se hayan agregado al DOM



function cargarProductos(productosElegidos) {
    // Limpiar el contenedor de productos
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach((producto, i) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div id="qw" data-index="${i}">
                <img class="producto-imagen" src="${producto.imagen[0]}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            </div>
        `;
        main.innerHTML = ""
        contenedorProductos.appendChild(div);
        main.appendChild(contenedorProductos)
    });

    // Actualizar los botones de agregar
    actualizarBotonesAgregar();
}



function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
    const qw = document.querySelectorAll("#qw");
    qw.forEach(bo => {
        bo.addEventListener("click", drawkp);
        
    });
}

function agregarAlCarrito(e) {
    e.stopPropagation();
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}



function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function drawkp(e) {
    let mas = 1;
    let aumento = 0;
    let get = localStorage.getItem("arreglo");
    let final = JSON.parse(get);
    const index = e.currentTarget.dataset.index;
    const pro = final[index];
    let imagenes = pro.imagen;

    console.log("Índice del producto en el array productosEnCarrito:", index);
    main.innerHTML = `
    <div class="caja-individual">
        <div id="image">
            <img class="productos" src="${imagenes[aumento]}">
            <button class="adelante"><span class="material-symbols-outlined">arrow_forward_ios</span></button>
            <button class="atras"><span class="material-symbols-outlined">arrow_back_ios</span></button>
        </div>
        <div class="producto-detalles2">
           <div class="info">
                <div class="descripciones">
                    <h2 class="title" >${pro.titulo}</h2>
                    <hr>
                    <p class="uno-uno">PRECIO</p>
                    <p class="uno">${pro.precio} COP</p>
                    <hr>
                    <p class="dos">${pro.info}</p>
                </div>
                
                <div class="cantidades">
                    <button class="mas">+</button>
                    <p class="ca">${mas}</p>
                    <button class="menos">-</button>
                </div>
                <div class="color">
                    <p class="col_colores">colores</p>
                </div>
                <div class="tallas-calzado">
                    <button class="talla-aumento">+</button>
                    <p class="tallas">35</p>
                    <button class="talla-decreciente">-</button>
                </div>
           </div>
           <div class="botones">
            
           </div>
        </div>
    </div>
   
  `;

    if (pro.categoria.id === "calzado") {
        document.querySelectorAll(".tallas-calzado").forEach(stye => {
            stye.style.display = "flex";
        });
        let tallaumento1 = pro.tallaInicial;
        const tallasAumento = document.querySelectorAll(".talla-aumento");
        tallasAumento.forEach(tallas => {
            tallas.addEventListener("click", e => {
                tallaumento1++;
                if (tallaumento1 > pro.tallaFinal) {
                    tallaumento1 = pro.tallaFinal;
                }
                document.querySelector(".tallas").textContent = tallaumento1;
            });
        });

        const tallasDecreciente = document.querySelectorAll(".talla-decreciente");
        tallasDecreciente.forEach(tallas => {
            tallas.addEventListener("click", e => {
                tallaumento1--;
                if (tallaumento1 <  pro.tallaInicial) {
                    tallaumento1 =  pro.tallaInicial;
                }
                document.querySelector(".tallas").textContent = tallaumento1;
            });
        });
    }
    const botonmas = document.querySelectorAll(".mas");
    botonmas.forEach((btn) => {
        btn.addEventListener("click", e => {
            mas++;
            if (mas > pro.numerodecantidades) {
                mas = pro.numerodecantidades;
            }
            document.querySelector(".ca").textContent = mas;
            updatePrecio(); // Llamar a la función para actualizar el precio
        });
    });
    
    const botonmenos = document.querySelectorAll(".menos");
    botonmenos.forEach((btn) => {
        btn.addEventListener("click", e => {
            mas--;
            if (mas < 1) {
                mas = 1;
            }
            document.querySelector(".ca").textContent = mas;
            updatePrecio(); // Llamar a la función para actualizar el precio
        });
    });
    
    const adelante = document.querySelectorAll(".adelante");
    adelante.forEach((ade) => {
        ade.addEventListener("click", e => {
            aumento++;
            if (aumento >= imagenes.length) {
                aumento = 0;
            }
            document.querySelectorAll(".productos").forEach(r => {
                r.src = imagenes[aumento];
            });
            updatePrecio();
        });
    });

    const atras = document.querySelectorAll(".atras");
    atras.forEach((at) => {
        at.addEventListener("click", (e) => {
            aumento--;
            if (aumento < 0) {
                aumento = imagenes.length - 1;
            }
            document.querySelectorAll(".productos").forEach((pro) => {
                pro.src = imagenes[aumento];
            });
            updatePrecio();
        });
    });
    let preciopParams = pro.precio;

    function updatePrecio() {
        const precioUnitario = parseFloat(pro.precio);
        const cantidad = parseFloat(document.querySelector(".ca").textContent);
        const precioTotal = precioUnitario * cantidad;
        preciopParams = precioTotal; // Actualiza la variable global preciopParams
        document.querySelector(".uno").textContent = precioTotal;
        data.amount = precioTotal; // Actualiza el precio en el objeto data
        
    }

   

 
    var handler = ePayco.checkout.configure({
        key: 'd9bb50a26f7e056ab82328afbe42c474',
        test: false // Cambiar a false en producción
    });
    
    // Verificar si el token está configurado correctamente
    if (!handler) {
        console.error("Error: El token no está configurado correctamente. Verifica la configuración del token.");
    } else {
        var data = {
            // Parámetros de la compra (obligatorios)
            name: pro.id,
            description: pro.info,
            currency: "cop",
            amount: preciopParams,
            tax_base: "4000",
            tax: "500",
            tax_ico: "500",
            country: "co",
            lang: "en",
    
            external: "false",
            methodsDisable: [ "PSE","SP","CASH"]
            // Opciones de pago
        };
        // Token configurado correctamente, continuar con la lógica del programa
        // ...
    }
    
    // Agregar manejo de errores al enviar datos a la API
    function enviarDatosAPI(url, options) {
        fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos enviados correctamente:', data);
        })
        .catch(error => {
            console.error('Error al enviar datos a la API:', error);
        });
    }
    
    // Llamar a la función enviarDatosAPI para enviar datos a la API
    document.querySelectorAll(".botones").forEach((contenedor) => {
        const botonPago = document.createElement("button");
        botonPago.textContent = "Pagar con ePayco";
        botonPago.addEventListener("click", function() {
            let tallas = parseInt(document.querySelector(".tallas").textContent); // Obtener la talla actualizada
            console.log(data.amount, tallas, data.name, data.description);
            if(pro.categoria.id === "calzado"){
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        talla: tallas // Enviar la talla actualizada a la API
                    })
                };
        
                enviarDatosAPI("https://sheet.best/api/sheets/feb0395a-eaa2-4952-aa49-40ae089d8067", options);
            }else{
                console.log("no se ha hecho post")

            }
            handler.open(data);
        });
        contenedor.appendChild(botonPago);
    });

    let cajacolor = document.querySelector(".color")

    let color = pro.colores
    color.forEach(co => {
        const div = document.createElement("div")
        div.classList.add("coloresJson")
        div.innerHTML =  ` 
            <p>${co}<p>
        `
        cajacolor.appendChild(div)


    })
    document.querySelectorAll(".coloresJson").forEach(col => {
        col.addEventListener("click" , e => {
            const color = col.textContent
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    color: color // Enviar la talla actualizada a la API
                })
            };
    
            enviarDatosAPI("https://sheet.best/api/sheets/feb0395a-eaa2-4952-aa49-40ae089d8067", options);

        })
    })
    


    

    
    

   
   

}



