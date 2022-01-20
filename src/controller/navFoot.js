function renderNav(){
    console.log("ola")
    fetch("http://localhost:3000/api/content/navbar")
    .then(res => res.text())
    .then(data => renderCode("navbar",data))
    .catch((err)=>{
        console.log(err);
        alert("Ocorreu um erro");
    });
}
function renderFooter(){
    fetch("http://localhost:3000/api/content/footer")
    .then(res => res.text())
    .then(data => renderCode("footer",data))
    .catch((err)=>{
        console.log(err);
        alert("Ocorreu um erro");
    });
}
function renderCode(id,codigo){
    console.log(codigo)
    document.getElementById(id).innerHTML = codigo;
}

function renderNavFoot(){
    renderNav();
    renderFooter();
}