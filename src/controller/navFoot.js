function renderNav(){
    fetch("http://localhost:3000/content/navbar")
    .then(res => res.text())
    .then(data => renderCode("navbar",data))
    .catch((err)=>{
        console.log(err);
        alert("Ocorreu um erro a carregar a navbar");
    });
}
function renderFooter(){
    fetch("http://localhost:3000/content/footer")
    .then(res => res.text())
    .then(data => renderCode("footer",data))
    .catch((err)=>{
        console.log(err);
        alert("Ocorreu um erro a carregar o footer");
    });
}
function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}

function renderNavFoot(){
    renderNav();
    renderFooter();
}