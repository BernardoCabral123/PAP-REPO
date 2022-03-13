function renderRegisto(){
    renderCode("content",`
    <div class="container mt-5">
            <div class="shadow-lg p-3 mb-5 bg-body rounded">
                <div class="info">
                    <center><div class="mt-1">
                        <h1>Registo</h1>
                        <p>Se ja possui conta faça <a onclick='renderLogin();' class="text-primary" style="cursor: pointer;"><strong>login</strong></a></p>
                    </div></center>
                </div>
                <div class="row">
                    <div class="imgCriarAnuncio col-sm-6 mt-3">
                        <img class="img-fluid" src="http://localhost:3000/files/Assets/criarEmpre.svg" alt="criar conta">
                    </div>
        
                    <div class="formulario col-sm-6 mt-5" novalidate>
                        <form id= "registoEmpresario">
                            <div class="row">
                                <div class="col-sm-12 mt-1">
                                    <div class="mt-1">
                                        <label for="emailadd" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" maxlength="255" onchange="validaEmail(this.value,this)">
                                    </div>
                                </div>
        
                                <div class="col-sm-12 mt-1">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" maxlength="15" value="" onchange="validaPassword(this.value,this)">
                                </div>
        
                                <div class="col-sm-12 mt-1">
                                    <label for="nomeempresa" class="form-label">Nome da empresa</label>
                                    <input type="text" class="form-control" id="nome" maxlength="50" onchange="validaNomeEmpresa(this.value,this)">
                                </div>
        
        
                                <div class="col-sm-12 mt-1">
                                    <label for="contactoTelefonico" class="form-label">Contacto telefónico</label>
                                    <input type="number" class="form-control" id="contactoTelefonico" placeholder="+351" min="1" max="999999999" onchange="validaContactoTelefonico(this.value,this)" onKeyPress="if(this.value.length==9) return false;">
                                </div>
                                
                                <div class="form-check col-sm-12 mt-3" style="margin-left: 12px;">
                                    <input class="form-check-input" type="checkbox" id="termosUso" onchange="validaTermosUsos(this)">
                                    <label class="form-check-label" for="termosUso">Aceitar</label>
                                    <a onclick='openModal("termos");' class="text-primary" style="cursor: pointer;"><strong>Termos de uso</strong></a>
                                    
                                    
                                    <div class="modal fade" id="termos">
                                        <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Termos de uso da utilização do sistema</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                            Termos do sistema
                                            </div>
                                            <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    
                                </div>
        
                                <div class="col-sm-12 justify-content-center mt-4">
                                    <center><button type="button" class="col-sm-6 btn btn-primary" style="border-radius: 30px;" onclick="registar();">Criar conta</button></center>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `);
}

async function registar(){
    if(validaRegistoEmpresa(document.getElementById("email"),document.getElementById("email").value,document.getElementById("password"),document.getElementById("password").value,document.getElementById("nome"),document.getElementById("nome").value,document.getElementById("contactoTelefonico"),document.getElementById("contactoTelefonico").value, document.getElementById("termosUso"))){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                tipoConta:"empresa",
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                nome: document.getElementById("nome").value,
                contactoTelefonico: document.getElementById("contactoTelefonico").value,
            })
        }

        await fetch('http://localhost:3000/api/users', options)
        .then(res => res.text())
        .then(text =>{
            alert(text)
        })
        .catch((err) =>{
            alert("Ocorreu um erro na efetuação do seu registo");
            alert(err);
        })
        location.reload()
    }
}

function validaPassword(password,idInput) {
    if(password != null && password != ""){
        var validation = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        
        if(validation.test(password)){
            idInput.style.border='solid green'
            return true
        }
        else{
            idInput.style.border='solid red'
            return false;
        }
    }
    else{
        console.log("password")
        idInput.style.border='solid red';
        return false;
    }
}

function validaRegistoEmpresa(caixaEmail,email,caixaPassword,password,caixaNome,nome,caixaContactoTelefonico,contactoTelefonico,caixaTermos){
    if(validaEmail(email,caixaEmail) 
        && validaPassword(password,caixaPassword) 
        && validaNomeEmpresa(nome,caixaNome)
        && validaContactoTelefonico(contactoTelefonico,caixaContactoTelefonico)
        && validaTermosUsos(caixaTermos))
        return true;
    else{
        validaEmail(email,caixaEmail)
        validaPassword(password,caixaPassword)
        validaNomeEmpresa(nome,caixaNome)
        validaContactoTelefonico(contactoTelefonico,caixaContactoTelefonico)
        validaTermosUsos(caixaTermos)
        return false;
    }
}

function validaLogin(){
    if(validaEmail(document.getElementById('email')) && validaPassword(document.getElementById('password'))){
        return true;
    }
    else{
        return false;
    }
}

function validaNomeEmpresa(nome,idInput){
    if(nome != null && nome != ""){
        idInput.style.border = "solid green";
        return true;
    }
    else{
        console.log('nome invalido')
        idInput.style.border = "solid red"
        return false;
    }
}

function validaEmail(email,idInput) {
    if(email != null && email != ""){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            idInput.style.border='solid green';
            return true;
        }
        else{
            idInput.style.border='solid red';
            return false;
        }
    }else{
        console.log("email invalido")
        idInput.style.border='solid red';
        return false;
    }
}

function validaContactoTelefonico(contactoTelefonico,idInput){
    if(contactoTelefonico != null && contactoTelefonico != ""){
        if(contactoTelefonico != null && contactoTelefonico != ""   ){
            if (!isNaN(contactoTelefonico) && contactoTelefonico.length == 9){
                idInput.style.border='solid green';
                return true;
            }
            else{
                idInput.style.border='solid red';
                return false;
            }
        }
    }else{
        idInput.style.border='solid red';
        return false;
    }
}

function validaTermosUsos(idInput){
    if(idInput.checked == true){
        idInput.style.backgroundColor = "green"
        idInput.style.border='solid green';
        return true;
    }else{
        
        idInput.style.backgroundColor = "white"
        idInput.style.border='solid red';
        return false;
    }
}

//funçoes
function validarCurso(caixaCurso, curso, caixaSigla, sigla, caixaArea, area, caixaDuracao, duracao){
    if(validarNomeCurso(caixaCurso, curso)
        && validaSigla(caixaSigla, sigla)
        && validaArea(caixaArea, area)
        && validaDuracao(caixaDuracao, duracao)){
            return true;
        }
    else {
        validarNomeCurso(caixaCurso, curso)
        validaSigla(caixaSigla, sigla)
        validaArea(caixaArea, area)
        validaDuracao(caixaDuracao, duracao)
        return false;
    }                             
}

function validarNomeCurso(nomeCurso, idInput){
    if(nomeCurso != null && nomeCurso != ""){
        idInput.style.border = "solid green";
        return true;
    }
    else{
        idInput.style.border = "solid red"
        return false;
    }
}

function validaSigla(sigla, idInput){
    if(sigla != null && sigla != ""){
        idInput.style.border = "solid green";
        return true;
    }
    else{
        idInput.style.border = "solid red"
        return false;
    }
}

function validaArea(area, idInput){
    if(area != null && area != "" && area != 0){
        idInput.style.border = "solid green";
        return true;
    }
    else{
        idInput.style.border = "solid red"
        return false;
    }
}

function validaDuracao(duracao, idInput){
    if(duracao != null && duracao != "" && duracao != 0){
        idInput.style.border = "solid green";
        return true;
    }
    else{
        idInput.style.border = "solid red"
        return false;
    }
}



