import { destroyNotas, destroyResultados, informeIsValid } from './authorize.js';
import { calcularNota } from './aprendo.js';
import { redirectToCategories, redirectToOperaciones } from './routes.js';

window.onload = function (){
    calcularNota();
}

const btnIrCategorias = document.getElementById("btnIrCategorias");
btnIrCategorias.addEventListener('click', (e) => {
    destroyResultados();
    informeIsValid();
    redirectToCategories();
});

const btnVolverJugar = document.getElementById("btnVolverJugar");
btnVolverJugar.addEventListener("click", e => {
    destroyNotas();
    informeIsValid();
    redirectToOperaciones();
});

const btnVerResultados = document.getElementById("btnVerResultados");
btnVerResultados.addEventListener("click", e => {
    toogleModal();
});


function toogleModal(){
    let display = document.getElementById("modalResultados");
    if(display.style.display === "initial" ){
        display.style.display = "none";
    }else{
        display.style.display = "initial";
    }
}

const btnCerrarModal = document.getElementById("btnCerrarModal");
btnCerrarModal.addEventListener("click", e => {
    toogleModal();
});
