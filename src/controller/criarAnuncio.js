function abrirDropbox(){
    let cb = document.getElementById('checkLocalizacao')
    let selectIlha = document.getElementById('ilha')
    let selectConcelho = document.getElementById('concelho')
    console.log(cb.checked)
    
    if(cb.checked == true){
        selectIlha.style.display = "none";
        selectConcelho.style.display = "none";
    }else{
        selectIlha.style.display = "block";
        selectConcelho.style.display = "block";
    }
}


function criarAnuncio(){
    //obeter valores do formulario
    let curso = document.getElementById('curso').value
    let area = document.getElementById('area').value
    let descricao = document.getElementById('descricao').value
    let vagas = document.getElementById('vagas').value
    //let ilha = document.getElementById('ilha').value
    //let conselho = document.getElementById('conselho').value
    //bollean true false let tipo = document.getElementById('ib').value
    console.log(curso,area,descricao,vagas)
    //criar um objeto com os valores
    let objeto = {
        curso: curso,
        area: area,
        descricao: descricao,
        qtdVagas: vagas,
        //telemovel: ilha,
        //email: conselho,
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

