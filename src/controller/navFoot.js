function renderNav(){
    fetch("http://localhost:3000/api/content/navbar")
    .then(res => res.text())
    .then(data => renderCode("navbar",data))
    .catch((err)=>{
        console.log(err);
        alert("Ocorreu a carregar a nav");
    });
}
function renderFooter(){
    fetch("http://localhost:3000/api/content/footer")
    .then(res => res.text())
    .then(data => renderCode("footer",data))
    .catch((err)=>{
        console.log(err);
        alert("Ocorreu a carregar o footer");
    });
}
function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}

function renderNavFoot(){
    renderNav();
    renderFooter();
}