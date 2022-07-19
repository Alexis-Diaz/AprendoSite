import { redirectToIndex, redirectToCategories } from "./routes.js";
import { logonUser } from "./authorize.js";

const btnVolver = document.getElementById("btnVolver");
btnVolver.addEventListener('click', e => {
    redirectToIndex();
});

const btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener('click', e => {
  
    if (logonUser()){
        //el usuario es correcto
        console.log("USUARIO VALIDO")
        redirectToCategories();

    }else{
        //el usuario es incorrecto
        console.log("USUARIO INVALIDO")
    }
});
