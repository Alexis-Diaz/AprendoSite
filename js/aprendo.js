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

//Funcion para cambiar el signo de la operacion
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

//Funcion para obtener de forma un numero aleatorio
//entre un numero minimo y maximo
export const numeroRandom = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (1 + max - min) + min);
}