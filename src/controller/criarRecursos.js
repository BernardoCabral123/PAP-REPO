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