function selecionarDiretor(){
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

        case "pedidos":
            fetch("http://localhost:3000/content/admin/pedidosAlunos")
            .then(res => res.text())
            .then(data => document.getElementById("painelGestao").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;
    } 
}
/*

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

*/

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
</div>`;
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
`

    document.getElementById('criacaoAluno').scrollIntoView();
}

function abrirCriarAdm(){
    document.getElementById("criacaoDTS").innerHTML = "";
    document.getElementById("criacaoAdm").innerHTML = `
    <div class="container mt-5">
    <div class="criarAluno shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row">
            <div class="col-6 mx-auto">
                <img class="img-fluid " src="http://localhost:3000/files/Assets/diretorTurma.svg" alt="aluno">
            </div>

            <div class="col-md-6 mt-4 mb-5">
                <form>
                    <div class="col-sm-12 mt-1">
                        <div class="mt-1" style="display: flex; justify-content: space-between;">
                            <label for="emailadd" class="form-label"><strong>Email</strong></label>
                                <div style="display: inline-block; width: 100%; text-align: right;" id="erroEmail"></div>
                        </div>
                        
                        <div id="emailHelp" class="form-text"><input type="email" class="form-control" id="email" aria-describedby="emailHelp" maxlength="255" onchange="validaEmail();" onclick="document.getElementById('erro').innerHTML = '';"></div>
                    </div>

                    <div class="col mt-4">
                        <center><div id="btn"><button type="button" class="col-sm-5 btn btn-primary" style="border-radius: 30px;" onclick="adicionar();">Adicionar</button></div></center>
                        <center><div id="erro" class="mt-4"></div></center>
                    </div>
                            
                    <div class="table-responsive-md mx-auto mt-3">
                        <table class="table text-center align-middle mt-2" id="tabela">
                            <thead>
                                <tr>
                                    <th class="text-center" scope="col">Email</th>
                                    <th class="text-center" scope="col">Ações</th>

                                </tr>
                            </thead >

                            <tbody id="lista">
                            </tbody>
                        </table>
                        <center><button type="button" class="col-sm-5 btn btn-primary mt-1" style="border-radius: 30px; display: none;" onclick="introduzir();" id="btnIntroduzir">Introduzir no sistema</button></center>
                    </div>
                </form>
            </div>
        </div>     
    </div>
</div>`

    document.getElementById('criacaoAdm').scrollIntoView();
}

function abrirCriarDTS(){
    document.getElementById('criacaoAdm').innerHTML = "";
    document.getElementById("criacaoDTS").innerHTML = `
    <div class="container mt-5">
        <div class="criarAluno shadow-lg p-3 mb-5 bg-body rounded">
            <div class="row">
                <div class="col-6">
                    <img class="img-fluid" src="http://localhost:3000/files/Assets/diretorTurma.svg" alt="aluno">
                </div>

                <div class="col-6 mt-4">
                    <form>
                            <div class="col-sm-12">
                                <label for="email" class="form-label"><strong>Email</strong></label>
                                <input type="text" class="form-control" id="email" style="border-radius: 15px;">
                            </div>

                            <div class="col-sm-12 mt-2">
                                <div class="table-responsive-sm">
                                    <table class="table text-center align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Turma</th>
                                                <th scope="col">Ano </th>
                                                <th scope="col">Curso</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
                                                <td>Tis T1</td>
                                                <td>3º</td>
                                                <td>Tecnico de informatica - Sistemas</td>
                                            </tr>
                                    
                                            <tr>
                                                <td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
                                                <td>Tis T1</td>
                                                <td>3º</td>
                                                <td>Tecnico de informatica - Sistemas</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="col mt-4">
                                <center><button type="submit" class="col-sm-5 btn btn-primary" style="border-radius: 30px;">Adicionar</button></center>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded col-sm-12" >
                <div class="table-responsive-sm mx-auto col-sm-6">
                    <table class="table text-center align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">Ações</th>

                            </tr>
                        </thead>
                        <tbody>                   
                        </tbody>
                    </table>
                    <center><button type="submit" class="col-sm-5 btn btn-primary mt-1" style="border-radius: 30px;">Introduzir no sistema</button></center>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById('criacaoDTS').scrollIntoView();
}

