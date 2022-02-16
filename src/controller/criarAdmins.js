var emails = [];
var n = 0;

function validaEmail() 
{

    document.getElementById("erro").innerHTML = ``;

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
        return false;
    }
}

async function existe(email) {
    try {
        const response = await fetch(`http://localhost:3000/api/conta/existe/${email}`);
        const resultado = await response.json();
        return resultado.existe;
    } catch (error) {
        console.error(error);
    }
}



async function adicionar(){

    let existeConta;

    document.getElementById("erro").innerHTML = ``;

    if(validaEmail()){
        existeConta = await existe(document.getElementById("email").value);
        existeConta = Number.parseInt(existeConta);
        console.log(existeConta);
    }

    if(existeConta == 1){
        document.getElementById("erro").innerHTML = `<label class="form-label" style="color: red;">Já existe uma conta com esse email no sistema</label>`;
    }
    else{
        if(validaEmail() && !emails.includes(document.getElementById("email").value)){
            document.getElementById("lista").innerHTML += `
            <tr id='${n}tr'>
            <td id='${n}email'>${document.getElementById("email").value}</td>
            <td class="d-flex mx-auto">
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
    }

function editar(x){
    document.getElementById(x+"tr").style.backgroundColor = "gray"
    document.getElementById("email").value = document.getElementById(x+"email").innerHTML;
    document.getElementById("btn").innerHTML = 
    `<button type="button" class="col-sm-5 btn btn-danger" style="border-radius: 30px;" onclick="cancelar(${x});">Cancelar</button>
    <button type="button" class="col-sm-5 btn btn-primary" style="border-radius: 30px;" onclick="confirmar(${x});">Confirmar</button>`
    

}

function cancelar(x){

    document.getElementById(x+"tr").style.backgroundColor = null;
    document.getElementById("btn").innerHTML = `<button type="button" class="col-sm-5 btn btn-primary" style="border-radius: 30px;" onclick="adicionar();">Adicionar</button>`
    document.getElementById("email").value = "";
    document.getElementById("erro").innerHTML = "";
}

function confirmar(x){

    
    if(validaEmail() && !emails.includes(document.getElementById("email").value)){
        emails[emails.indexOf(document.getElementById(x+"email").innerHTML)] = document.getElementById("email").value;
        document.getElementById(x+"email").innerHTML = document.getElementById("email").value;
        document.getElementById(x+"tr").style.backgroundColor = null;
        document.getElementById("btn").innerHTML = `<button type="button" class="col-sm-5 btn btn-primary" style="border-radius: 30px;" onclick="adicionar();">Adicionar</button>`
        document.getElementById("email").value = "";
        document.getElementById("erro").innerHTML = "";
        
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
    
    let emailobjs = [];
    for(let i = 0;i <emails.length; i++){
        emailobjs.push({email:emails[i]})
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(emailobjs)
    }

    console.log(options.body)
    
    
    fetch('http://localhost:3000/api/admins', options)
    .then(res => res.text())
    .then(text =>{
        alert(text)
    })
    .catch((err) =>{
        alert("Ocorreu um erro na efetuação dos registos");
        console.log(err);
    })
}