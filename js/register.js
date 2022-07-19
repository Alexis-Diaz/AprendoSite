import { redirectToIndex, redirectToCategories } from "./routes.js";

const btnVolver = document.getElementById("btnVolver");
btnVolver.addEventListener('click', e => {
    redirectToIndex();
});

const btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener('click', e => {
    redirectToCategories();
});

// const btnEmpezar = document.getElementById("btn-empezar");
// btnEmpezar.addEventListener('click', e => {
//     redirectToRegister();
// });

// const btnEmpezar = document.getElementById("btn-empezar");
// btnEmpezar.addEventListener('click', e => {
//     redirectToRegister();
// });