function selecionarTabela(){
    switch(document.getElementById("estado").value){
        case "alunos":
        
            fetch("http://localhost:3000/content/admin/gerirAlunos")
            .then(res => res.text())
            .then(data => document.getElementById("tabela").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
    
        break;
        case "empresa":
            fetch("http://localhost:3000/content/admin/gerirEmpresas")
            .then(res => res.text())
            .then(data => document.getElementById("tabela").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;
        case "diretores":
            fetch("http://localhost:3000/content/admin/gerirDTs")
            .then(res => res.text())
            .then(data => document.getElementById("tabela").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;

        case "adm":
            fetch("http://localhost:3000/content/admin/gerirAdmins")
            .then(res => res.text())
            .then(data => document.getElementById("tabela").innerHTML = data)
            .catch((err)=>{
                console.log(err);
                alert("Ocorreu um erro a carregar a criação de admins");
            });
        break;
    } 
}