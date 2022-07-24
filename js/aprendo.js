import { redirectToInforme } from "./routes.js";

//Cambia la categoria del juego en la pagina de consejos
export const cambiarCategoria = () => {
   
    const cookie = localStorage.getItem("categoria");
    let categoria = "";

    switch (cookie) {
        case "1":
            categoria="SUMAS";
        break;

        case "2":
            categoria="RESTAS"
        break;

        case "3":
            categoria="DIVISIÓN"
        break;

        case "4":
            categoria="MULTIPLICACIÓN"
        break;

        case "5":
            categoria="MIXTA"
        break;
    }
    document.getElementById("spanSuma").innerHTML = categoria;
    return categoria;
}

//Funcion para cambiar el signo de la operacion matematica
export const cambiarSignoOperacion = () => {
    const cookie = localStorage.getItem("categoria");
    let categoria = "";

    switch (cookie) {
        case "1":
            categoria="+";
        break;

        case "2":
            categoria="-"
        break;

        case "3":
            categoria="÷"
        break;

        case "4":
            categoria="x"
        break;

        case "5":
            let valor = numeroRandom(1,4);
            switch (valor){
                case 1:
                    categoria = "+"
                    break;
                case 2:
                    categoria = "-"
                    break;
                case 3:
                    categoria="÷"
                    break;
                case 4:
                    categoria="x"
                    break;
            }
        break;
    }
    document.getElementById("signoOperacion").innerHTML = categoria;
    return categoria;
}

//Funcion para cambiar los numeros de la operacion matematica
export const cambiarNumerosOperacion = (signo) => {
    let numA = 0;
    let numB = 0;
   //de kinder 5 años 1 a 10 solo sumas
   //de primer a segundo 1 a 20 sumas y restas
   //de tercer grado 1 a 20 multiplicaciones y divisiones
   //de cuarto y quinto 1 a 30
   //de basica 1 a 50
   //de media 1 a 100
    let min = 1;
    let max = 100

    if(signo === '+'){
        numA = numeroRandom(min, max);
        numB = numeroRandom(min, max);
    }

    if(signo === '-'){
        numA = numeroRandom(min, max);
        numB = numeroRandom(min, max);

        while (numB > numA){
            numB = numeroRandom(min, max);
        }
    }

    if(signo === '÷'){
        numA = numeroRandom(min, max);
        numB = numeroRandom(min, max);

        while (numA % numB != 0 || numA === numB || numB === 1){
            numA = numeroRandom(min, max);
            numB = numeroRandom(min, max);
        }
    }

    if(signo === 'x'){
        numA = numeroRandom(min, max);
        numB = numeroRandom(min, max);
    }

    document.getElementById("numArriba").innerHTML = numA; 
    document.getElementById("numAbajo").innerHTML = numB; 
}

//Funcion para validar la respuesta ingresada por el usuario
export const comprobarRespuesta = (veces) => {
    let res = false;

    const numA = parseInt(document.getElementById("numArriba").innerHTML);
    const numB = parseInt(document.getElementById("numAbajo").innerHTML);
    const resUsuario = parseInt(document.getElementById("txtResultado").value);
    const tipoOperacion = document.getElementById("signoOperacion").innerHTML;
    
    let aciertos = 0;
    let errores = 0;

    switch(tipoOperacion){
        case '+':
            if(resUsuario == numA + numB){
                aciertos ++;
            }else{
                errores ++;
            }
        break;

        case '-':
            if(resUsuario == numA - numB){
                aciertos ++;
            }else{
                errores ++;
            }
        break;

        case '÷':
            if(resUsuario == numA / numB){
                aciertos ++;
            }else{
                errores ++;
            }
        break;

        case 'x':
            if(resUsuario == numA * numB){
                aciertos ++;
            }else{
                errores ++;
            }
        break;
    }

    if(guardarRespuestas(aciertos, errores, veces)){
        res = true;
    }else{
        let signo = cambiarSignoOperacion();
        cambiarNumerosOperacion(signo);
        limpiarEntradaUsuario();
    }

    return res;
}

export const iniciarTiempo = (minute, second, veces) =>{
    const min = minute;
    const seg = second;

    const spanMin = document.getElementById("timerMinute");
    const spanSeparador = document.getElementById("separator");
    const spanSeg = document.getElementById("timerSecond");

    const myTimer = setInterval(() => {
        if(second > -1){
            second --;

            if(second < 10){
                spanMin.style.color="red";
                spanSeparador.style.color="red";
                spanSeg.style.color="red";
                second = "0" + second
            }
            
            if(second === "0-1" && minute >= 1){
                minute--;
                second = 59;
            }

            if( minute === 0 && second === "0-1"){
                second = "00"
                if(comprobarRespuesta(veces)){
                    clearInterval(myTimer);
                    redirectToInforme();
                }else{
                    spanMin.style.color="rgb(12 143 25)";
                    spanSeparador.style.color="rgb(12 143 25)";
                    spanSeg.style.color="rgb(12 143 25)";

                    minute = min;
                    second = seg
                }
            }
        }
        spanMin.innerHTML = minute;
        spanSeg.innerHTML= second;

    }, 1000);

    return myTimer;
}

//Funcion para obtener de forma un numero aleatorio
//entre un numero minimo y maximo
function numeroRandom (min, max){
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//funcion para limpiar la entrada del usuario
function limpiarEntradaUsuario(){
    document.getElementById("txtResultado").value="";
}

//function para guardar en local las respuestas del usuario
function guardarRespuestas(aciertos, errores, veces ){
    let res = false;
    const obtenerResultados = localStorage.getItem("resultados");
   
    if(obtenerResultados !== null){

        let values = obtenerResultados.split('|');
        aciertos = parseInt(values[0]) + aciertos;
        errores = parseInt(values[1]) + errores;
        localStorage.setItem("resultados", `${aciertos}|${errores}`);

        //Aqui se verifica la cantidad de operaciones a realizar
        if(aciertos + errores === veces){
            res = true;
        }

    }else{

        localStorage.setItem("resultados", `${aciertos}|${errores}`);

    }
    return res;
}

function destroyResultados(){
    localStorage.removeItem("resultados");
    localStorage.removeItem("categoria");
}
