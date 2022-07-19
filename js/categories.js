import { redirectToConsejos, redirectToIndex } from "./routes.js";

const btnSumas = document.getElementById("btnSumas");
btnSumas.addEventListener('click', e => {
    redirectToConsejos();
});

const btnRestas = document.getElementById("btnRestas");
btnRestas.addEventListener('click', e => {
    redirectToConsejos();
});

const btnDivision = document.getElementById("btnDivision");
btnDivision.addEventListener('click', e => {
    redirectToConsejos();
});

const btnMultiplicacion = document.getElementById("btnMultiplicacion");
btnMultiplicacion.addEventListener('click', e => {
    redirectToConsejos();
});

const btnTodo = document.getElementById("btnTodo");
btnTodo.addEventListener('click', e => {
    redirectToConsejos();
});

const btnCerrar = document.getElementById("btnCerrar");
btnCerrar.addEventListener('click', e => {
    redirectToIndex();
});