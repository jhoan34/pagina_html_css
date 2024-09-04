function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector("#track");
    const carrusel = track.querySelectorAll(".carrusel");

    const carruselWidth = carrusel[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;
    
    // Inicializa la posición izquierda de la pista del carrusel
    let leftPosition = track.style.left === "" ? track.style.left = 0 : parseFloat(track.style.left.slice(0,-2) * -1);

    // Llama a la función correspondiente según el botón clicado
    btn.dataset.button === "button-prev" ? this.prevAction(leftPosition, carruselWidth, track) : this.nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
};

App.prototype.prevAction = function(leftPosition, carruselWidth, track) {
    if (leftPosition >= 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    } else {
        track.style.left = 0;
    }
};

App.prototype.nextAction = function(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
};
