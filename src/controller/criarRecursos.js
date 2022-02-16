var emails = [];
var n = 0;

function validaEmail() 
{
    if(document.getElementById("email").value != null && document.getElementById("email").value != ""   ){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)){
            document.getElementById("erroEmail").innerHTML = ``;
            return true;
        }
        else{
            document.getElementById("erroEmail").innerHTML = `<label class="form-label" style="color: red; "> Email inválido</label>`;
            return false;
        }
    }else{
        document.getElementById("erroEmail").innerHTML = ``;
    }
}

function adicionar(){
    document.getElementById("erro").innerHTML = ``;
    if(validaEmail() && !emails.includes(document.getElementById("email").value)){
        document.getElementById("lista").innerHTML += `
        <tr id='${n}tr'>
        <td id='${n}email'>${document.getElementById("email").value}</td>
        <td >
            <button type=button class=" btn btn-primary" onclick="editar(${n});" id"${n}editar">Editar</button>
            <button type=button class=" btn btn-danger" onclick="eliminar(${n});" id="${n}eliminar">Eliminar</button>
        </td>
        </tr>`;
    
        emails.push(document.getElementById("email").value);
        n++;
        document.getElementById("email").value = "";
        document.getElementById("btnIntroduzir").style.display = "block";
    }
    else if(emails.includes(document.getElementById("email").value)){
        document.getElementById("erro").innerHTML = `<label class="form-label" style="color: red;">Este email já foi introduzido</label>`;
    }
    else{
        document.getElementById("erro").innerHTML = `<label class="form-label" style="color: red;">Preencha o campo devidamente</label>`;
    }
    
}


function editar(x){
    document.getElementById(x+"tr").style.backgroundColor = "gray"
    document.getElementById("email").value = document.getElementById(x+"email").innerHTML;
    document.getElementById("btn").innerHTML = `<button type="button" class="col-sm-5 btn btn-primary" style="border-radius: 30px;" onclick="confirmar(${x});">Confirmar</button>`

}

function confirmar(x){
    if(validaEmail() && !emails.includes(document.getElementById("email").value)){
        emails[emails.indexOf(document.getElementById(x+"email").innerHTML)]= document.getElementById("email").value;
        document.getElementById(x+"email").innerHTML = document.getElementById("email").value;
        document.getElementById(x+"tr").style.backgroundColor = null;
        document.getElementById("btn").innerHTML = `<button type="button" class="col-sm-5 btn btn-primary" style="border-radius: 30px;" onclick="adicionar();">Adicionar</button>`
        document.getElementById("email").value = "";
        
    }else if(emails.includes(document.getElementById("email").value)){
        document.getElementById("erro").innerHTML = `<label class="form-label" style="color: red;">Este email já foi introduzido</label>`;
    }
    else{
        document.getElementById("erro").innerHTML = `<label class="form-label" style="color: red;">Preencha o campo devidamente</label>`;
    }
}

function eliminar(x){

    emails.splice(emails.indexOf(document.getElementById(x+"email").innerHTML),1);
    document.getElementById(x+"tr").remove();

    if(document.getElementById("tabela").rows.length == 1)
        document.getElementById("btnIntroduzir").style.display = "none";
}

function introduzir(){
    console.log(JSON.stringify(emails))
}



function selecionar(){
    switch(document.getElementById("escolha").value){
        case "alunos":
            
            fetch("http://localhost:3000/content/admin/criarAlunos")
            .then(res => res.text())
            .then(data => document.getElementById("conteudo").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        
    
        break;
        case "diretores":
            fetch("http://localhost:3000/content/admin/criarDTs")
            .then(res => res.text())
            .then(data => document.getElementById("conteudo").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;
        case "admins":
            fetch("http://localhost:3000/content/admin/criarAdmins")
            .then(res => res.text())
            .then(data => document.getElementById("conteudo").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;

    } 
}