// Seleciona o formulário HTML
const form = document.querySelector('form');

// Seleciona os elementos do formulário HTML
const nome = document.getElementById('nome');
const senha =  document.getElementById('senha')
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const data = document.getElementById('data');
const horario = document.getElementById('horario');
const tipo = document.getElementById('tipo');
const sub = document.getElementById('sub');
const observacoes = document.getElementById('observacoes');
const bota = document.getElementById('bota');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que a página seja recarregada

  // Verifica se todos os campos foram preenchidos
  if (nome.value !== '' && email.value !== '' && telefone.value !== '' && data.value !== '' && horario.value !== '' && senha.value !== '' && tipo.value !== 'none') {
    // Exibe mensagem de sucesso e limpa o formulário
    alert('Agendamento realizado com sucesso!');
    form.reset();
  } else {
    // Exibe mensagem de erro
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
});

// Redireciona o usuário para a página de registro
function mostrarSignup() {
  window.location.href = 'signup.html';
}

// Alterna a exibição da senha
function mostrar_senha(){
  var senha = document.getElementById("senha");
  if (senha.type == "password"){
    senha.type = "text";
  }else{
  senha.type = "password";  
  }
}

var modoEscuro = false; // define o modo inicial como claro

function alternarModo() {
  modoEscuro = !modoEscuro; // alterna o estado da variável de controle
  if (modoEscuro) {

    document.body.style.backgroundColor = "#21262D";
    document.body.style.color = "whitesmoke";

    var nome = document.getElementById('nome');
    var senha =  document.getElementById('senha')
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var data = document.getElementById('data');
    var horario = document.getElementById('horario');
    var tipo = document.getElementById('tipo');
    var observacoes = document.getElementById('observacoes');
    var sub = document.getElementById('sub');
    var bota = document.getElementById('bota');

    nome.style.backgroundColor = "#40414F";
    senha.style.backgroundColor = "#40414F";
    email.style.backgroundColor = "#40414F";
    telefone.style.backgroundColor = "#40414F";
    data.style.backgroundColor = "#40414F";
    horario.style.backgroundColor = "#40414F";
    tipo.style.backgroundColor = "#40414F";
    observacoes.style.backgroundColor = "#40414F";
    sub.style.backgroundColor = "#40414F";
    bota.style.backgroundColor = "black";
    bota.style.color = "whitesmoke";
    bota.style.borderColor = "whitesmoke";
    
    document.getElementById("bot").innerHTML = "Light Mode";

  } else {

    document.body.style.backgroundColor = "";
    document.body.style.color = "";

    var nome = document.getElementById('nome');
    var senha =  document.getElementById('senha')
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var data = document.getElementById('data');
    var horario = document.getElementById('horario');
    var tipo = document.getElementById('tipo');
    var observacoes = document.getElementById('observacoes');
    var sub = document.getElementById('sub');
    var bota = document.getElementById('bota');



    nome.style.backgroundColor = "";
    senha.style.backgroundColor = "";
    email.style.backgroundColor = "";
    telefone.style.backgroundColor = "";
    data.style.backgroundColor = "";
    horario.style.backgroundColor = "";
    tipo.style.backgroundColor = "";
    observacoes.style.backgroundColor = "";
    sub.style.backgroundColor = "";
    bota.style.backgroundColor = "";
    bota.style.color = ""
    bota.style.borderColor = "";

    document.getElementById("bot").innerHTML = "Dark Mode"; 
    
  }
}

