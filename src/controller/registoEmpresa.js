function criarContaEmpresario(){
    //obeter valores do formulario
    let nome = document.getElementById('nomeAluno').value
    let moradaRua = document.getElementById('moradaRua').value
    let moradaNum = document.getElementById('moradaNum').value
    let data = document.getElementById('dataNasc').value
    let numTel = document.getElementById('telemovelAluno').value
    let email = document.getElementById('email').value
    let tipo = document.getElementById('tipo').value
    
    //criar um objeto com os valores
    let objeto = {
        username: nome,
        moradarua: moradaRua,
        moradanumero: moradaNum,
        datanascimento: data,
        telemovel: numTel,
        email: email,
        tipos: tipo
    }

    //trasnformar o objeto em jason
    let objetoJSON = JSON.stringify(objeto)

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
