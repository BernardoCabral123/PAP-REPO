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

function criarAlunos(){
    document.getElementById('criar').innerHTML = "";
    fetch("http://localhost:3000/content/admin/criarAlunos")
            .then(res => res.text())
            .then(data => document.getElementById("criar").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de Alunos");
    });
}

function criarTurmas(){
    document.getElementById('criar').innerHTML = "";
    fetch("http://localhost:3000/content/admin/criarTurmas")
            .then(res => res.text())
            .then(data => document.getElementById("criarTurmas").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de Turmas");
    });
}

function criarCursos(){
    document.getElementById('criar').innerHTML = "";
    fetch("http://localhost:3000/content/admin/criarCursos")
            .then(res => res.text())
            .then(data => document.getElementById("criarCursos").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de Cursos");
    });
}

function criarAdm(){
    document.getElementById('criar').innerHTML = "";
    fetch("http://localhost:3000/content/admin/criarAdmins")
            .then(res => res.text())
            .then(data => document.getElementById("criarAdm").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
    });
}


function criarDTS(){
    document.getElementById('criar').innerHTML = "";
    fetch("http://localhost:3000/content/admin/criarDTs")
            .then(res => res.text())
            .then(data => document.getElementById("criarDTS").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de diretor");
    });
}