import { redirectToOperaciones} from "./routes.js"


const btnComenzar = document.getElementById("btnComenzar");
btnComenzar.addEventListener('click', e => {
    redirectToOperaciones();
});
