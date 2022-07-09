
function redirectToRegister () {
    let IsProduction = false;

    if(!IsProduction){
        //Pruebas locales
        const UrlGlobal = `${location.protocol}/${location.hostname}${(location.port ? ':' + location.port: '')}${location.pathname}`
        const path = `${location.pathname}`
        const pathRaiz = path.replace("/index.html", "")
        console.log(`${pathRaiz}/register.html`)
        window.location.href=`${pathRaiz}/pages/register.html`
    }else{
        //pruebas en produccion
        window.location.href = "/pages/register.html"
    }
   
}