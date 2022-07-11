
function redirectToRegisterss () {
    let IsProduction = false;

    if(!IsProduction){
        //Pruebas locales
        // const UrlGlobal = `${location.protocol}/${location.hostname}${(location.port ? ':' + location.port: '')}${location.pathname}`
        const path = `${location.pathname}`
        //const pathRaiz = path.replace("/index.html", "")
        const pathRaiz = path.replace("/categories.html", "")

        window.location.href=`${pathRaiz}/register.html`
    }else{
        //pruebas en produccion
        window.location.href = "/pages/register.html"
    }
}

function redirectToCategories () {
    let IsProduction = false;

    if(!IsProduction){
        //Pruebas locales
        // const UrlGlobal = `${location.protocol}/${location.hostname}${(location.port ? ':' + location.port: '')}${location.pathname}`
        const path = `${location.pathname}`
        const pathRaiz = path.replace("/register.html", "")
        window.location.href=`${pathRaiz}/categories.html`
    }else{
        //pruebas en produccion
        window.location.href = "/pages/categories.html"
    }
}

function redirectToIndex() {
    let IsProduction = false;

    if(!IsProduction){
        //Pruebas locales
        // const UrlGlobal = `${location.protocol}/${location.hostname}${(location.port ? ':' + location.port: '')}${location.pathname}`
        const path = `${location.pathname}`
        //const pathRaiz = path.replace("/index.html", "")
        const pathRaiz = path.replace("pages/register.html", "")
        window.location.href=`${pathRaiz}index.html`
    }else{
        //pruebas en produccion
        window.location.href = "/index.html"
    }
}

function redirectToRegister (){
    window.location.href = "/pages/register.html"
}

function redirectToCategories (){
    window.location.href = "/pages/categories.html"
}

function redirectToCategoriess (){
    window.location.href = "/pages/register.html"
}

function redirectToConsejos (){
    window.location.href = "/pages/consejos.html"
}

function redirectToIndex (){
    window.location.href = "/"
}