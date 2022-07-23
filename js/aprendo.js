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
export const cambiarNumerosOperacion = () => {
    document.getElementById("numArriba").innerHTML = numeroRandom(1,15); 
    document.getElementById("numAbajo").innerHTML = numeroRandom(1,15); 
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

    cambiarSignoOperacion();
    cambiarNumerosOperacion();
    limpiarEntradaUsuario();

    if(guardarRespuestas(aciertos, errores, veces)){
        res = true;
    }

    return res;
}

//Funcion para obtener de forma un numero aleatorio
//entre un numero minimo y maximo
export const numeroRandom = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
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

