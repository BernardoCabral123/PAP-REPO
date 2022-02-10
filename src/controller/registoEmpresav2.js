class Empresario{

    constructor(){
        this.id = 0;
        this.arrayEmpresario = [];
    }

    aguardar(){
        let empresario = this.lerDados();

        if(this.validaCampos(empresario)){
            this.adicionar(empresario);
        }
        
        this.listaTabela();
        this.limparDadosFormulario();
        this.trasformarJson();
    }

    listaTabela(){
        const tabela = document.getElementById('tabela')
        tabela.innerHTML = '';
                
        for(let i = 0; i < this.arrayEmpresario.length; i++){
            tabela.innerHTML += `<td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
                                <td>${this.arrayEmpresario[i].nome}</td>
                                <td>${this.arrayEmpresario[i].email}</td>
                                <td>${this.arrayEmpresario[i].password}</td>
                                <td>${this.arrayEmpresario[i].nTelemovel}</td>
                                <td>${this.arrayEmpresario[i].morada}</td>
                                <td>${this.arrayEmpresario[i].nRua}</td>
                                <td><button type="button" class="col-sm-6 btn btn-primary" onclick="empresario.edit();">delete</button></td>
                                <td><button type="button" class="col-sm-6 btn btn-danger" onclick="empresario.delete();">editar</button></td>
                                `
        }
    }
    
    trasformarJson(){
        const arrayToString = JSON.stringify(Object.assign({}, this.arrayEmpresario)); // convert array to string
        const stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object
        console.log(stringToJsonObject);
    }

    /*
    postTabelaBD(){
        //const arrayToString = JSON.stringify(Object.assign({}, this.arrayEmpresario)); // convert array to string
        //const stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object
        //console.log(stringToJsonObject);
        
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: stringToJsonObject
        }
        
        fetch('http://localhost:3000/utilizador', options)
        .then(res => res.text())
        .then(text =>{
            alert(text)
        })
        .catch((err) =>{
            alert(err)
        })
    }
    */
    
    adicionar(empresario){
        this.arrayEmpresario.push(empresario);
        this.id++;
    }

    delete(){

    }

    limparDadosFormulario(){
        document.getElementById("registoEmpresario").reset();
    }

    lerDados(){
        const empresario = {}
        empresario.id = this.id;
        empresario.nome = document.getElementById('nomeempresa').value
        empresario.email = document.getElementById('emailadd').value
        empresario.password = document.getElementById('password').value
        empresario.nTelemovel = document.getElementById('nTelemovel').value
        empresario.morada = document.getElementById('morada').value
        empresario.nRua = document.getElementById('nRua').value

        return empresario;
    }

    validaCampos(empresario){
        let msg = '';

        if(empresario.nome == ''){
            msg += 'Digite seu nome \n'
        }
        if(empresario.email == ''){
            msg += 'Digite seu email \n'
            
        }
        if(empresario.password == ''){
            msg += 'Digite seu pass \n'
            
        }
        if(empresario.nTelemovel == ''){
            msg += 'Digite seu telemovel \n'
            
        }
        if(empresario.morada == ''){
            msg += 'Digite seu morada \n'
        }
        if(empresario.nRua == ''){
            msg += 'Digite seu nRua \n'
        }
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar(){
        
    }
}

var empresario = new Empresario();