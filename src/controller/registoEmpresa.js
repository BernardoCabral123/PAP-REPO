// Example starter JavaScript for disabling form submissions if there are invalid fields
function validacao() {  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    var btn = document.getElementById('btnCriar')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('click', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else{
            cConta();
          }
          form.classList.add('was-validated')
        }, false)
      })
}

function aceitarTermos(){
    let cb = document.getElementById('termosUso')
    let btn = document.getElementById('aceitarbtn')

    btn.addEventListener("click", function(){
        if(btn.click){
            cb.checked = true;
        }
    });
}

async function fillIlhas(){
    await fetch('http://localhost:3000/api/localizacao/ilhas')
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i< data.length; i++){
            document.getElementById("ilha").innerHTML+= `<option value="${data[i].idIlha}">${data[i].nome}</option>`
    }})
    .catch((err)=>{
        console.log(err)
        alert('Erro na recolha das ilhas')
    })
}

async function getConcelhos(){
    if(document.getElementById("ilha").value != 0){
        document.getElementById('concelho').disabled = false;
        await fetch(`http://localhost:3000/api/localizacao/concelhos/${document.getElementById("ilha").value}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("concelho").innerHTML="";
            for(let i = 0; i< data.length; i++){
                document.getElementById("concelho").innerHTML+= `<option value="${data[i].idConcelho}">${data[i].nome}</option>`
        }})
        .catch((err)=>{
            alert('Erro na recolha dos concelhos')
        })
    }
    else{

        document.getElementById('concelho').value = 0;
        document.getElementById('concelho').disabled = true;
    }
}


function cConta(){
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            contactoTelefonico: document.getElementById("contactoTelefonico").value,
            nome: document.getElementById("nome").value,
            idConcelho: document.getElementById("concelho").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value
        })
    }

    fetch('http://localhost:3000/api/empresas', options)
    .then(res => res.text())
    .then(text =>{
        alert(text)
    })
    .catch((err) =>{
        alert("Ocorreu um erro na efetuação do seu registo");
        alert(err);
    })
}

function aceitarTermos(){
    let cb = document.getElementById('termosUso')
    let btn = document.getElementById('aceitarbtn')

    console.log(cb.checked)

    btn.addEventListener("click", function(){
        if(btn.click){
            cb.checked = true;
        }
    });
}


/*

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

function validaContactoTelefonico(){
    if(document.getElementById("contactoTelefonico").value != null && document.getElementById("contactoTelefonico").value != ""   ){
        if (!isNaN(document.getElementById("contactoTelefonico").value) && document.getElementById("contactoTelefonico").value.length == 9){
            document.getElementById("erroContactoTelefonico").innerHTML = ``;
            return true;
        }
        else{
            document.getElementById("erroContactoTelefonico").innerHTML = `<label class="form-label" style="color: red; "> Contacto telefónico inválido</label>`;
            return false;
        }
    }else{
        document.getElementById("erroContactoTelefonico").innerHTML = ``;
    }
}

function validaRegisto(){
    if(document.getElementById("nome").value != "" && document.getElementById("nome").value != null
    && document.getElementById("email").value != "" && document.getElementById("email").value != null
    && document.getElementById("password").value != "" && document.getElementById("password").value != null
    && document.getElementById("contactoTelefonico").value != "" && document.getElementById("contactoTelefonico").value != null
    && document.getElementById("concelho").value != 0
    && document.getElementById("rua").value != "" && document.getElementById("rua").value != null
    && document.getElementById("numero").value != "" && document.getElementById("numero").value != null
    && validaEmail()
    && validaContactoTelefonico()
    &&document.getElementById("termosUso").checked)
        return true;
    else
        return false;
}



function cConta(){
    
    document.getElementById("erro").innerHTML = ``;

    if(validaRegisto())
    {
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    contactoTelefonico: document.getElementById("contactoTelefonico").value,
                    nome: document.getElementById("nome").value,
                    idConcelho: document.getElementById("concelho").value,
                    rua: document.getElementById("rua").value,
                    numero: document.getElementById("numero").value
                })
        }
        
        fetch('http://localhost:3000/api/empresas', options)
        .then(res => res.text())
        .then(text =>{
            alert(text)
        })
        .catch((err) =>{
            alert("Ocorreu um erro na efetuação do seu registo");
            console.log(err);
        })
        
    }else{
        document.getElementById("erro").innerHTML = `<label class="form-label" style="color: red;">Preencha todos os campos devidamente</label>`;
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
*/