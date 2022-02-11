var ilhas;
var concelhos;


async function fillIlhas(){
    await fetch('http://localhost:3000/api/localizacao/ilhas')
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i< data.length; i++){
            document.getElementById("ilha").innerHTML+= `<option value="${data[i].idIlha}">${data[i].nome}</option>`
    }})
    .catch((err)=>{
        console.log(err)
        alert('Erro na recolha das ilhas')
    })
}

async function getConcelhos(){
    if(document.getElementById("ilha").value != 0){
        document.getElementById('concelho').disabled = false;
        await fetch(`http://localhost:3000/api/localizacao/concelhos/${document.getElementById("ilha").value}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("concelho").innerHTML="";
            for(let i = 0; i< data.length; i++){
                document.getElementById("concelho").innerHTML+= `<option value="${data[i].idConcelho}">${data[i].nome}</option>`
        }})
        .catch((err)=>{
            alert('Erro na recolha dos concelhos')
        })
    }
    else{

        document.getElementById('concelho').value = 0;
        document.getElementById('concelho').disabled = true;
    }
}

function cConta(){
    if(document.getElementById("nome").value != "" 
    && document.getElementById("email").value != "" 
    && document.getElementById("password").value != "" 
    && document.getElementById("contactoTelefonico").value != "" 
    && document.getElementById("concelho").value != 0
    && document.getElementById("rua").value != ""
    && document.getElementById("numero").value != ""){
        
    }else{
        document.getElementById("erroIncompleto").innerHTML = `<label class="form-label" style="color: red;">Preencha todos os campos</label>`
    }
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


