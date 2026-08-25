alert("¡Hola! Mi página funciona con JavaScript.");
function cambiarTexto() {
    document.getElementById("titulo").textContent = "¡Has cambiado el texto!";
}
function cambiarColor() {
    document.body.style.backgroundColor = "lightblue";
}
function saludar() {
    let nombre = document.getElementById("nombre").value;

    document.getElementById("mensaje").textContent = "¡Hola, " + nombre + "!";
}
