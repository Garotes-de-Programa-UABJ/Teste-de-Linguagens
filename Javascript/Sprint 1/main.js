// Seleciona o formulário HTML
const form = document.querySelector('form');

// Seleciona os elementos do formulário HTML
const nome = document.getElementById('nome');
const senha =  document.getElementById('senha')
const cpf =  document.getElementById('cpf')
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
  if (nome.value !== '' && email.value !== '' && telefone.value !== '' && data.value !== '' && horario.value !== '' && senha.value !== '' && cpf.value !=='' && tipo.value !== 'none') {
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
    var cpf =  document.getElementById('cpf')


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
    cpf.style.backgroundColor = "#40414F";

    
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
    var cpf =  document.getElementById('cpf')




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
    cpf.style.backgroundColor = "";


    document.getElementById("bot").innerHTML = "Dark Mode"; 
    
  }
}
$(document).ready(function(){
  $('.data').mask('00/00/0000');
  $('.horario').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.telefone').mask('(00) 00000-0000');
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});
