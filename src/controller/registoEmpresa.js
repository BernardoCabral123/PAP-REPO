var ilhas;
var concelhos; 
var idConcelho;

function getIlhas(){
    const tipo = document.getElementById('ilha')
    fetch('http://localhost:3000/api/ilha')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        tipo.innerHTML= `<option selected>Escolha um tipo de utilizador...</option>`;
        for(i in data){
            let op = 
            `<option value="${data[i].idtipo}">${data[i].designacao}</option>`
            tipo.innerHTML += op
        }
    })
    .catch((err)=>{
        alert('Erro na recolha das ilhas')
    })
}

function getConcelhos(){

}


function criarConta(){
    
    //criar um objeto com os valores do formulário
    let objeto = {
        nome: document.getElementById('nomeempresa').value,
        email: document.getElementById('emailadd').value,
        password: document.getElementById('password').value,
        contactoTelefonico: document.getElementById('contactoTelefonico').value,
        idConcelho: null, //precisa de codigo
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value
    }

    //trasnformar o objeto em json
    let objetoJSON = JSON.stringify(objeto)
    console.log(objetoJSON)

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: objetoJSON
    }
    
    fetch('http://localhost:3000/utilizador', options)
    .then(res => res.text())
    .then(text =>{
        alert(text)
    })
    .catch((err) =>{
        alert(err)
    })
}


