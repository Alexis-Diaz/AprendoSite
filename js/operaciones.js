import { redirectToCategories} from "./routes.js"
import { numeroRandom, cambiarSignoOperacion } from "./aprendo.js";

const btnSalir = document.getElementById("btnSalir");
btnSalir.addEventListener('click', e => {
    redirectToCategories();
});

window.onload = function () {
    document.getElementById("numArriba").innerHTML = numeroRandom(1,15); 
    document.getElementById("numAbajo").innerHTML = numeroRandom(1,15); 
    cambiarSignoOperacion();
}