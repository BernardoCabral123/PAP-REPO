function criarContaEmpresario(){
    //obeter valores do formulario
    let nome = document.getElementById('nomeempresa').value
    let email = document.getElementById('emailadd').value
    let password = document.getElementById('password').value
    let nTelemovel = document.getElementById('nTelemovel').value
    let morada = document.getElementById('morada').value
    let nRua = document.getElementById('nRua').value

    console.log(nome,email,password,nTelemovel,morada,nRua);
    
    //criar um objeto com os valores
    let objeto = {
        nome: nome,
        emailEmpresario: email,
        pass: password,
        telemovel: nTelemovel,
        moradaR: morada,
        moradaN: nRua,
    }

    //trasnformar o objeto em jason
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


