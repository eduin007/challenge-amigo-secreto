// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let nombreAmigo= document.getElementById('amigo').value;
    if(nombreAmigo == ""){
       alert("el campo no puede estar vacio") 
        
    }else{
       amigos.push(nombreAmigo) 
       console.log(amigos)
    }
    limpiarCaja()
    
    return;
}
function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSeleccionado = amigos[indiceAleatorio];
    asignarTextoElemento('h2', `El amigo secreto es ${nombreSeleccionado}`)
    return ;
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}