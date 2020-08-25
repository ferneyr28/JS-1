console.log("hola")
var personaje = document.getElementById('personaje');


personaje.addEventListener('click', ()=>{
    cambiarDato('nombre');
    cambiarDato('edad');
    cambiarDato('ciudad');
    cambiarDato('profesion');
});

function cambiarDato(id) {
    console.log(id);
    var valor = prompt('ingres el valor de ' + id);
    var nodo = document.getElementById(id);
    nodo.innerText = valor; 
    
    
}
