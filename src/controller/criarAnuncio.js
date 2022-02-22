function validacao() {  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else{
            cAnuncio()
          }
          form.classList.add('was-validated')
        },false)
    })
}

function cAnuncio(){
    const objeto = {
        area: document.getElementById('area').value,
        descricao: document.getElementById('descricao').value,
        vagas: document.getElementById('vagas').value,
        ilha: document.getElementById('ilha').value,
        concelho: document.getElementById('concelho').value
    }

    //trasnformar o objeto em json
    const objetoJSON = JSON.stringify(objeto)
    
    console.log(objetoJSON)
    alert(objetoJSON)

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: objetoJSON
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

