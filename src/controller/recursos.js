function selecionar(){
    switch(document.getElementById("estado").value){
        case "alunos":
        
            fetch("http://localhost:3000/content/admin/gerirAlunos")
            .then(res => res.text())
            .then(data => document.getElementById("painelGestao").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
    
        break;
        case "empresa":
            fetch("http://localhost:3000/content/admin/gerirEmpresas")
            .then(res => res.text())
            .then(data => document.getElementById("painelGestao").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;
        case "diretores":
            fetch("http://localhost:3000/content/admin/gerirDTs")
            .then(res => res.text())
            .then(data => document.getElementById("painelGestao").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;

        case "adm":
            fetch("http://localhost:3000/content/admin/gerirAdmins")
            .then(res => res.text())
            .then(data => document.getElementById("painelGestao").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;
    } 
}

function mostrarBotao(x,y){    
    if(document.getElementById(y).innerHTML === "")
    document.getElementById(x).style.display = 'block';

}

function esconderBotao(x){
    document.getElementById(x).style.display = "none";
}
function abrirCriarCurso(){
    document.getElementById("criacaoTurma").innerHTML = "";
    document.getElementById("criacaoAluno").innerHTML = "";

    document.getElementById('criacaoCurso').innerHTML = 
        `<div class="container mb-2">
            <div class="criarAluno shadow-lg p-3 bg-body rounded">
                <div class="row">
                    <div class="col-4 mx-auto">
                        <img class="img-fluid" style="height= 10px; width:auto;" src="http://localhost:3000/files/Assets/curso.svg" alt="aluno">
                    </div>

                    <div class="col-md-8">
                        <form>
                            <div class="row mt-4">
                                <div class="col-sm-6 mt-1">
                                    <label for="pNome" class="form-label"><strong>Nome do curso</strong></label>
                                    <input type="text" class="form-control" id="pNome" >
                                </div>
                        
                                <div class="col-sm-6 mt-1">
                                    <label for="pUltimo" class="form-label"><strong>Sigla</strong></label>
                                    <input type="text" class="form-control" id="pUltio" >
                                </div>
                        
                                <div class="col-sm-6 mt-1">
                                    <label for="turma" class="form-label"><strong>Area</strong></label>
                                    <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                                        <option value="0" selected></option>
                                        <option value="">Informática</option>
                                        <option value="redes">Industrias</option>
                                        <option value="multimedia">Cozinha</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 mt-1">
                                <label for="turma" class="form-label"><strong>Duração</strong></label>
                                <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                                    <option value="0" selected></option>
                                    <option value="sistemas">1 ano</option>
                                    <option value="redes">3 anos</option>
                                </select>
                            </div>
                        </div>

                                <div class="col-sm-12 mt-4">
                                <center><button type="button" class="col-sm-3 btn btn-danger mx-1" style="border-radius: 30px;" onclick='document.getElementById("criacaoCurso").innerHTML = "";';>Fechar</button>
                                <button type="button" class="col-sm-3 btn btn-primary  mx-1" style="border-radius: 30px;">Criar curso</button></center>                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;

    document.getElementById('criacaoCurso').scrollIntoView();
}

function abrirCriarTurma(){
    document.getElementById("criacaoCurso").innerHTML = "";
    document.getElementById("criacaoAluno").innerHTML = "";

    document.getElementById("criacaoTurma").innerHTML = `
    <div class="container mb-2">
    <div class="criarAluno shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row">
            <div class="col-4 mx-auto">
                <img class="img-fluid" src="http://localhost:3000/files/Assets/turma.svg" alt="aluno">
            </div>

            <div class="col-md-8 mx-auto mt-3">
                <form>
                <div class="row mt-4">
                                <div class="col-sm-6 mt-1">
                                    <label class="form-label"><strong>Curso</strong></label>
                                    <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                                        <option value=0 selected></option>
                                        <option value="sistemas">Técnico de informatica - Sistemas</option>
                                        <option value="redes">Técnico de informatica - Redes</option>
                                        <option value="multimedia">Técnico de informatica - Multimedia</option>
                                    </select>
                                </div>
                        
                                <div class="col-sm-6 mt-1">
                                    <label class="form-label"><strong>Ano</strong></label>
                                    <select id="ano" class="form-select col-sm-12" aria-label="Default select example" >
                                        <option value=0 selected></option>
                                        <option value=1> 2º ano</option>
                                        <option value=2>3º ano</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 mt-1">
                            <label for="turma" class="form-label"><strong>Diretor de turma</strong></label>
                            <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                                <option value="0" selected></option>
                                <option value="sistemas">Ana Pereira - anapereira@enta.pt</option>
                                <option value="redes">Duarte Cota - duartecota@enta.pt</option>
                            </select>
                                </div>
                                
                        
                        <div class="col-sm-12 mt-4">
                                
                                    <center><button type="button" class="col-sm-3 btn btn-danger mx-1" style="border-radius: 30px;" onclick='document.getElementById("criacaoTurma").innerHTML = "";'>Fechar</button>
                                    <button type="button" class="col-sm-3 btn btn-primary  mx-1" style="border-radius: 30px;">Criar turma</button></center>
                        </div>
                </form>
                    </div> 
                </form>
            </div>
        </div>
    </div>
</div>


`;
    

    document.getElementById('criacaoTurma').scrollIntoView();
}

function abrirCriarAluno(){
    document.getElementById("criacaoCurso").innerHTML = "";
    document.getElementById("criacaoTurma").innerHTML = "";

    document.getElementById("criacaoAluno").innerHTML = `
<div class="container mb-2">
    <div class="criarAluno shadow-lg p-3 bg-body rounded">
        <div class="row">
            <div class="col-4 mx-auto">
                <img class="img-fluid" style="height= 10px; width:auto;" src="http://localhost:3000/files/Assets/criarAluno.svg" alt="aluno">
            </div>

            <div class="col-md-8">
                <form>
                    <div class="row mt-4">
                        
                    <div class="col-sm-6 mt-1">
                        <label class="form-label"><strong>Curso</strong></label>
                        <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                            <option value=0 selected></option>
                        </select>
                    </div>
            
                    <div class="col-sm-6 mt-1">
                        <label class="form-label"><strong>Turma</strong></label>
                        <select id="ano" class="form-select col-sm-12" aria-label="Default select example" >
                            <option value=0 selected></option>
                        </select>
                    </div>

                    <div class="col-sm-6 mt-1">
                    <label for="pNome" class="form-label"><strong>Primeiro e último nome</strong></label>
                    <input type="text" class="form-control" id="pNome" > </input>
                </div>


                <div class="col-sm-6 mt-1">
                    <label for="pUltio" class="form-label"><strong>Email</strong></label>
                    <input type="text" class="form-control" id="pUltio" > </input>
                </div>

                        <div class="col-sm-12 mt-4">
                            <center><button type="button" class="col-sm-3 btn btn-danger mx-1" style="border-radius: 30px;" onclick='document.getElementById("criacaoAluno").innerHTML = "";'>Fechar</button>
                            <button type="button" class="col-sm-3 btn btn-primary mx-1" style="border-radius: 30px;">Criar Aluno</button></center>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
`;

    document.getElementById('criacaoAluno').scrollIntoView();
}