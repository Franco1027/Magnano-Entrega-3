const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
const mensajeBievenida = document.getElementById('mensaje-bienvenida');

mensajeBievenida.textContent = `¡Bienvenido ${usuarioActual.username} a nuestra tienda de celulares!`;




function seleccionarMarca(marca) {
    
    if (marca === "Samsung") {
      window.location.href = "samsung.html";
    } else if (marca === "iPhone") {
      window.location.href = "apple.html";
    } else if (marca === "Motorola") {
        window.location.href = "motorola.html";
    }
}

