function div(select){
  const tabelaAlunos = document.getElementById('categoria').innerHTML = 
  `<div class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Primeiro Nome</th>
          <th scope="col">Ultimo Nome</th>
          <th scope="col">Turma</th>
          <th scope="col">Email</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Cota</td>
          <td>TIS</td>
          <td>ruben.francico38@gmail.com</td>
          <td><div id="circulo"></div></td>
        </tr>

        <tr>
          <td>Mark</td>
          <td>Cota</td>
          <td>TIS</td>
          <td>ruben.francico38@gmail.com</td>
          <td><div id="circulo"></div></td>
        </tr>

        <tr>
          <td>Mark</td>
          <td>Cota</td>
          <td>TIS</td>
          <td>ruben.francico38@gmail.com</td>
          <td><div id="circulo"></div></td>
        </tr>

        <tr>
          <td>Mark</td>
          <td>Cota</td>
          <td>TIS</td>
          <td>ruben.francico38@gmail.com</td>
          <td><div id="circulo"></div></td>
        </tr>
      </tbody>
    </table>
  </div>`
  
  //////////////////////////////////////////////////////////////////////////

  const tabelaEmpresarios = document.getElementById('categoria').innerHTML = 
    `<div class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
      <table class="table">
        <thead>
          <tr>
            <th scope="col-sm-2">Nome da empresa</th>
            <th scope="col-sm-2">Nome responsavel</th>
            <th scope="col-sm-2">Email</th>
            <th scope="col-sm-2">Nº Anuncios</th>
            <th scope="col-sm-2">Anuncios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bem Saude</td>
            <td>Duarte</td>
            <td>Duarte.francico38@gmail.com</td>
            <td>2</td>
                <td>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mais</button>
                  
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-body">
                          <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                            <div class="row">
                              <div class="logo col-sm-3">
                                <div class="img">
                                  <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                  <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                </div>
                              </div>
            
                              <div class="conteudo col-sm-9 mt-5">
                                <div class="row">
                                  <div class="col-sm-6">
                                    <h5>Curso</h5>
                                    <p>Técnico de informática - Sistemas</p>
                                  </div>
            
                                  <div class="col-sm-6">
                                    <h5>Área de integração</h5>
                                    <p>Gestão de redes</p>                            
                                  </div>
            
                                  <div class="col-sm-6 mt-5">
                                    <h5 class="card-title">Descrição do trabalho</h5>
                                    <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                  </div>
            
                                  <div class="col-sm-6 mt-5">
                                    <h5>Localização</h5>
                                    <p>São pedro, Ponta Delgada, São Miguel</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                            <div class="row">
                              <div class="logo col-sm-3">
                                <div class="img">
                                  <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                  <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                </div>
                              </div>
            
                              <div class="conteudo col-sm-9 mt-5">
                                <div class="row">
                                  <div class="col-sm-6">
                                    <h5>Curso</h5>
                                    <p>Técnico de informática - Sistemas</p>
                                  </div>
            
                                  <div class="col-sm-6">
                                    <h5>Área de integração</h5>
                                    <p>Gestão de redes</p>                            
                                  </div>
            
                                  <div class="col-sm-6 mt-5">
                                    <h5 class="card-title">Descrição do trabalho</h5>
                                    <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                  </div>
            
                                  <div class="col-sm-6 mt-5">
                                    <h5>Localização</h5>
                                    <p>São pedro, Ponta Delgada, São Miguel</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                            <div class="row">
                              <div class="logo col-sm-3">
                                <div class="img">
                                  <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                  <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                </div>
                              </div>
            
                              <div class="conteudo col-sm-9 mt-5">
                                <div class="row">
                                  <div class="col-sm-6">
                                    <h5>Curso</h5>
                                    <p>Técnico de informática - Sistemas</p>
                                  </div>
            
                                  <div class="col-sm-6">
                                    <h5>Área de integração</h5>
                                    <p>Gestão de redes</p>                            
                                  </div>
            
                                  <div class="col-sm-6 mt-5">
                                    <h5 class="card-title">Descrição do trabalho</h5>
                                    <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                  </div>
            
                                  <div class="col-sm-6 mt-5">
                                    <h5>Localização</h5>
                                    <p>São pedro, Ponta Delgada, São Miguel</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                            <div class="row">
                              <div class="logo col-sm-3">
                                <div class="img">
                                  <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                  <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                </div>
                              </div>
            
                              <div class="conteudo col-sm-9 mt-5">
                                <div class="row">
                                  <div class="col-sm-6">
                                    <h5>Curso</h5>
                                    <p>Técnico de informática - Sistemas</p>
                                  </div>
            
                                  <div class="col-sm-6">
                                    <h5>Área de integração</h5>
                                    <p>Gestão de redes</p>                            
                                  </div>
            
                                  <div class="col-sm-6 mt-5">
                                    <h5 class="card-title">Descrição do trabalho</h5>
                                    <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                  </div>
            
                                  <div class="col-sm-6 mt-5">
                                    <h5>Localização</h5>
                                    <p>São pedro, Ponta Delgada, São Miguel</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
          </tr>

          <tr>
            <td>Bem Saude</td>
            <td>Duarte</td>
            <td>Duarte.francico38@gmail.com</td>
            <td>2</td>
            <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
          </tr>

          <tr>
            <td>Bem Saude</td>
            <td>Duarte</td>
            <td>Duarte.francico38@gmail.com</td>
            <td>2</td>
            <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
          </tr>

          <tr>
            <td>Bem Saude</td>
            <td>Duarte</td>
            <td>Duarte.francico38@gmail.com</td>
            <td>2</td>
            <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
          </tr>
        </tbody>
      </table>
  </div>`
  
  //////////////////////////////////////////////////////////////////////////

  const tabelaFormadores = document.getElementById('categoria').innerHTML = 
    `<div class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Primeiro Nome</th>
              <th scope="col">Ultimo Nome</th>
              <th scope="col">Area</th>
              <th scope="col">Email</th>
              <th scope="col">Numero telemovel</th>
              <th scope="col">Perfil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Cota</td>
              <td>Programação</td>
              <td>ruben.francico38@gmail.com</td>
              <td>910214987</div></td>
              <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
            </tr>

            <tr>
              <td>Mark</td>
              <td>Cota</td>
              <td>Programação</td>
              <td>ruben.francico38@gmail.com</td>
              <td>910214987</div></td>
              <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
            </tr>

            <tr>
              <td>Mark</td>
              <td>Cota</td>
              <td>Programação</td>
              <td>ruben.francico38@gmail.com</td>
              <td>910214987</div></td>
              <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
            </tr>

            <tr>
              <td>Mark</td>
              <td>Cota</td>
              <td>Programação</td>
              <td>ruben.francico38@gmail.com</td>
              <td>910214987</div></td>
              <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
            </tr>
          </tbody>
        </table>
      </div>`

  //////////////////////////////////////////////////////////////////////////

  const tabelaTurmas = document.getElementById('categoria').innerHTML = 
    `<div class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
      <table class="table">
        <thead>
          <tr>
          <th scope="col"></th>
          <th scope="col">Turma</th>
          <th scope="col">Curso</th>
          <th scope="col">Diretor de turma</th>
          <th scope="col">Alunos</th>
          <th scope="col">Alunos com estagio</th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
            <td>TIS T1</td>
            <td>Tecnico de informatica sistemas-</td>
            <td>Mark</td>
            <td>10</td>
            <td>10</td>
          </tr>

          <tr>
            <td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
            <td>TIS T1</td>
            <td>Tecnico de informatica sistemas-</td>
            <td>Mark</td>
            <td>10</td>
            <td>10</td>
          </tr>

          <tr>
            <td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
            <td>TIS T1</td>
            <td>Tecnico de informatica - sistemas</td>
            <td>Mark</td>
            <td>10</td>
            <td>10</td>
          </tr>

          <tr>
            <td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
            <td>TIS T1</td>
            <td>Tecnico de informatica - sistemas</td>
            <td>Mark</td>
            <td>10</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div></div>
    </div>`
  
  //////////////////////////////////////////////////////////////////////////
  
  let fill = tabelaAlunos + tabelaEmpresarios + tabelaTurmas + tabelaFormadores

  document.getElementById('categoria').innerHTML = fill

  if(select.value == "alunos"){
    document.getElementById('categoria').innerHTML = ""
    document.getElementById('categoria').innerHTML = tabelaAlunos
  }
  if(select.value == "empresarios"){
    document.getElementById('categoria').innerHTML = ""
    document.getElementById('categoria').innerHTML = tabelaEmpresarios
  }
  if(select.value == 'turmas'){
  document.getElementById('categoria').innerHTML = ""
  document.getElementById('categoria').innerHTML = tabelaTurmas
  }
  if(select.value == 'formadores'){
    document.getElementById('categoria').innerHTML = ""
    document.getElementById('categoria').innerHTML = tabelaFormadores
  }
}
