function criarAnuncio(){
    //obeter valores do formulario
    let curso = document.getElementById('curso').value
    let area = document.getElementById('area').value
    let descricao = document.getElementById('descricao').value
    let vagas = document.getElementById('vagas').value
    let ilha = document.getElementById('ilha').value
    let conselho = document.getElementById('conselho').value
    //bollean true false let tipo = document.getElementById('ib').value
    
    //criar um objeto com os valores
    let objeto = {
        username: curso,
        moradarua: area,
        moradanumero: descricao,
        datanascimento: vagas,
        telemovel: ilha,
        email: conselho,
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