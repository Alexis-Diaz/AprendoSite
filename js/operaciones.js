import { redirectToCategories, redirectToInforme} from "./routes.js"
import { cambiarSignoOperacion, comprobarRespuesta, cambiarNumerosOperacion } from "./aprendo.js";

const btnSalir = document.getElementById("btnSalir");
btnSalir.addEventListener('click', e => {
    redirectToCategories();
});

//para cambiar los numero de forma aleatoria la 
//primera vez que carga la pagina
window.onload = function () {
    cambiarNumerosOperacion();
    cambiarSignoOperacion();
}

//validacion del boton enviar
const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", e => {
    if(comprobarRespuesta(10)){
        redirectToInforme();
    }
})