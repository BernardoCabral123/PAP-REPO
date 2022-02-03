function getcartoes(){
    const cartoesdiv = document.getElementById('ofertas')
    fetch('http://localhost:3000/ofertas')
    .then(res => res.json())
    .then(data => {
        for(i in data){
            let ofertas =
            `<div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                <div class="row">
                    <div class="logo col-sm-3">
                        <div class="img">
                            <center><button type="button" class="btn btn-sm btn-outline-primary mb-2">Manifestar interese</button></center>
                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                        </div>
                    </div>

                    <div class="conteudo col-sm-9 mt-4">
                        <div class="row">
                            <div class="col-sm-6">
                                <h5>Curso</h5>
                                <p>${data[i].curso}</p>
                            </div>

                            <div class="col-sm-6">
                                <h5>Área de integração</h5>
                                <p>${data[i].area}</p>                            
                            </div>

                            <div class="col-sm-6 mt-5">
                                <h5 class="card-title">Descrição do trabalho</h5>
                                <p>${data[i].descricao}</p>                           
                            </div>

                            <div class="col-sm-6 mt-5">
                                <h5>Localização</h5>
                                <p>${data[i].localizacao}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            cartoesdiv.innerHTML += ofertas
        }
    })
    .catch((err) =>{
        console.log(err)
    })
}

function filtro(){
    const tipo = document.getElementById('tipo')
    fetch('http://localhost:3000/tipos')
    .then(res => res.json())
    .then(data => {
        tipo.innerHTML+=
        `<option selected>Insira utilizador</option>`
        for(i in data){
            let op = 
            `<option value ="${data[i].idtipos}">${data[i].designacao}</option>`
            tipo.innerHTML += op
        }
    })
    .catch((err) =>{
        console.log(err)
    })
}