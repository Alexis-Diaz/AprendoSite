export const cambiarCategoria = () => {
    debugger;
    const cookie = localStorage.getItem("categoria");
    let categoria = "";

    switch (cookie) {
        case "1":
            categoria="sumas";
        break;

        case "2":
            categoria="restas"
        break;

        case "3":
            categoria="división"
        break;

        case "4":
            categoria="multiplicación"
        break;

        case "5":
            categoria="mixta"
        break;
    }
    document.getElementById("spanSuma").innerHTML = categoria;
    return categoria;
}
