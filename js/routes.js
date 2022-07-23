const regularExpression = /index.html|pages\/register.html|pages\/categories.html|pages\/consejos.html|pages\/operaciones.html|pages\/error.html/
const UrlGlobal = location.pathname.replace(regularExpression, "");
let isProduction = true;

function redirectToRegister (){
    // console.log(location.protocol);
    // console.log(location.hostname);
    // console.log(location.port);
    // console.log(location.pathname);

    if(isProduction){
        window.location.href = "/pages/register.html"
    }else{
        window.location.href = `${UrlGlobal}pages/register.html`
    }
}

function redirectToCategories (){
    
    //getInfoUser();


    //Sirve la url
    if(isProduction){
         window.location.href = "/pages/categories.html"
    }else{
        window.location.href = `${UrlGlobal}pages/categories.html`
    }
}

function redirectToConsejos (){
    if(isProduction){
        window.location.href = "/pages/consejos.html"
    }else{
        window.location.href = `${UrlGlobal}pages/consejos.html`
    }
}

function redirectToIndex (){
    if(isProduction){
        window.location.href = "/"
    }else{
        window.location.href = `${UrlGlobal}index.html`
    }
}

function redirectToOperaciones () {
    if(isProduction){
        window.location.href = "/pages/operaciones.html"
    }else{
        window.location.href = `${UrlGlobal}pages/operaciones.html`
    }
}

function redirectToError () {
    if(isProduction){
        window.location.href = "/pages/error.html"
    }else{
        window.location.href = `${UrlGlobal}pages/error.html`
    }
}

export {redirectToRegister, redirectToCategories, redirectToConsejos,redirectToIndex, redirectToOperaciones, redirectToError}