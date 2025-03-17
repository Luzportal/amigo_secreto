let amigos = [];
let listaAmigosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
let nombre = document.getElementById('amigo').value;
    if (nombre.trim() !== "") {
        amigos.push(nombre);
        console.log("Lista actual de amigos:", amigos);
        
    } else {
        alert ('Por favor, inserte un nombre.');
    }
    
    limpiarCaja();
    asignarTextoElemento('ul',amigos);
    limpiarLista();
    return;
}

function limpiarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of amigos) { 
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        lista.appendChild(nuevoElemento);
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    if (amigos.length > 0) {
        let posAmigoSorteado = Math.floor(Math.random()*amigos.length);
        let nombreAmigoSorteado = amigos[posAmigoSorteado];
        console.log(nombreAmigoSorteado)
        console.log('Lista de amigos sorteados: ', listaAmigosSorteados);   
        if(listaAmigosSorteados.length==amigos.length){
            asignarTextoElemento('#listaAmigos','Ya fueron sorteados todos los amigos');
            asignarTextoElemento('#resultado','El juego ha acabado'); 
            }
        else{
            asignarTextoElemento('#listaAmigos','');
            if(listaAmigosSorteados.includes(nombreAmigoSorteado)){                                 
                return sortearAmigo();}
            else{listaAmigosSorteados.push(nombreAmigoSorteado);  
                asignarTextoElemento('#resultado',`El amigo sorteado es: ${nombreAmigoSorteado}`);
                    return nombreAmigoSorteado;
                }
                    
            }              
    }
}


