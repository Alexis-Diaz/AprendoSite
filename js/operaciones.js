import { redirectToCategories, redirectToInforme} from "./routes.js"
import { cambiarSignoOperacion, comprobarRespuesta, cambiarNumerosOperacion, iniciarTiempo } from "./aprendo.js";

let myInterval = 0;


const btnSalir = document.getElementById("btnSalir");
btnSalir.addEventListener('click', e => {
    redirectToCategories();
});

//para cambiar los numero de forma aleatoria la 
//primera vez que carga la pagina
window.onload = function () {
    const signo = cambiarSignoOperacion();
    cambiarNumerosOperacion(signo);
    myInterval = iniciarTiempo(0, 60, 10)
}

//validacion del boton enviar
const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", e => {

    clearInterval(myInterval);
    if(comprobarRespuesta(10)){
        redirectToInforme();
    }
    myInterval = iniciarTiempo(0, 60, 10)
})