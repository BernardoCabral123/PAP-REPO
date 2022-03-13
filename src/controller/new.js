function renderRegisto(){
    renderCode("content",`
    <div class="container mt-5">
            <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #3898ec;">
                <div class="container-fluid">
                    <a class="navbar-brand">Filtragem</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-6">
                                    <select class="form-select" aria-label="Default select example" id="ilha" onchange="getConcelhos();">
                                        <option selected></option>
                                    </select>
                                </div>
            
                                <div class="col-sm-6">
                                    <select class="form-select" aria-label="Default select example" id="concelho" disabled>
                                        <option selected></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

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
                                    <input type="password" class="form-control" id="password" maxlength="15" onchange="validaPassword(this.value,this)">
                                    <!--<div class="invalid-feedback"><p>no minimo 8 caracters</p></div>-->
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
                                    <input class="form-check-input" type="checkbox" id="termosUso">
                                    <label class="form-check-label" for="termosUso">Aceitar</label>
                                    <a onclick='openModal("termos");' class="text-primary" style="cursor: pointer;"><strong>Termos de uso</strong></a>
                                    
                                    <!-- <Modal> -->
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
                                    <!-- </Modal> -->
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
    if(validaRegistoEmpresa()){
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



function validaRegistoEmpresa(){
    if(validaEmail(document.getElementById('email'))
    && document.getElementById("nome").value != "" && document.getElementById("nome").value != null
    && validaPassword(document.getElementById("password").value)
    && validaContactoTelefonico(document.getElementById('contactoTelefonico').value)
    && document.getElementById("termosUso").checked == true){
        return true;
    }
    else{

    }
}

function limparValidacao(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let contacto = document.getElementById("contactoTelefonico").value;
    let none = document.getElementById("nome").value

    var x = document.getElementById("");
    
    
    /*
    if(email != "" && email != null){
        email.style.border="solid gren";
    }

    if(pass != "" && pass != null){
        pass.style.border ="solid gren";
    }

    if(contacto != "" && contacto != null){
        contacto.style.border="solid gren";
    }

    if(none != "" && none != null){
        none.style.border="solid gren";
    }

    else{

    }
    */
}

function validaNomeEmpresa(nome,idInput){
    if(nome != null && nome != ""){
        idInput.style.border = "solid green"
        return true;
    }
    else{
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
        idInput.style.border='solid red';
        return false;
    }
}

function validaContactoTelefonico(contactoTelefonico,idInput){
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
}
