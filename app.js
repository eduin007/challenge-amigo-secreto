// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let nombreAmigo= document.getElementById('amigo').value.trim();
    if(nombreAmigo == ""){
       alert("el campo no puede estar vacio") 
        return
    }
       amigos.push(nombreAmigo) 
       console.log(amigos)
       mostrarLista()
       limpiarCaja()
    
    return;
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = ""; // Limpiar la lista existente para evitar duplicados

    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}
function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSeleccionado = amigos[indiceAleatorio];
    let elementoHTML=document.getElementById("resultado")
    elementoHTML.innerHTML=`El amigo elegido es ${nombreSeleccionado}`;
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