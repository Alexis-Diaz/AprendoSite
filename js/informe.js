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


