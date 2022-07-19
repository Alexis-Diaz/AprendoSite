import { redirectToRegister} from "./routes.js"


const btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener('click', e => {
    redirectToRegister();
});
