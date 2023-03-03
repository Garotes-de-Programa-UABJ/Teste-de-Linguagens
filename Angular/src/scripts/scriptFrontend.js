function paraEntrar(){

  let tela1 = document.getElementById('tela1');
  let tela2 = document.getElementById('tela2');

  tela1.style.display = "none";
  tela2.style.display = "flex";
}

function paraCadastro(){

  let tela2 = document.getElementById('tela2');
  let tela3 = document.getElementById('tela3');

  tela2.style.display = "none";
  tela3.style.display = "flex";
}

function voltarParaLogin(){

  let tela2 = document.getElementById('tela2');
  let tela3 = document.getElementById('tela3');

  tela2.style.display = "flex";
  tela3.style.display = "none";
}

function concluirCadastro(){
  alert("Cadastro concluido");
}

function entrar(){
  alert("Parabéns, você entrou!");
}
