document.getElementById("miBoton").addEventListener("click", function() { //busco por id el boton, le agrego un evento al hacer click q cree una funcion e imprima helloWorld 
    document.getElementById("demo").innerHTML = "Hello World";
});

//creación de una función que me indique que la página esta cargada : Evento onload
function paginaCargada() {
    alert("La página esta cargada");
}

//Evento onmouse : The onmouseout event occurs when the mouse pointer is moved out of an element, or out of one of its children.
function mouseOut() {
    document.getElementById("onmouseout");
    alert("Usted se encuentra sobre el elemento");
}

function mouseOver() {
    document.getElementById("onmouseover");
    alert("No estas sobre mí (Input)");
}