import { redirectToCategories} from "./routes.js"


const btnSalir = document.getElementById("btnSalir");
btnSalir.addEventListener('click', e => {
    redirectToCategories();
});
