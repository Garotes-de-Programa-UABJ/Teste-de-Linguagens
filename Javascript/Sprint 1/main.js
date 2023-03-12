// Seleciona o formulário HTML
const form = document.querySelector('form');

// Seleciona os elementos do formulário HTML
const nome = document.getElementById('nome');
const senha = document.getElementById('senha')
const cpf = document.getElementById('cpf')
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
  if (nome.value !== '' && email.value !== '' && telefone.value !== '' && data.value !== '' && horario.value !== '' && senha.value !== '' && cpf.value !== '' && tipo.value !== 'none') {
    // Exibe mensagem de sucesso e limpa o formulário
    alert('Agendamento realizado com sucesso!');
    form.reset();
  } else {
    // Exibe mensagem de erro
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
});

var modoEscuro = false; // define o modo inicial como claro

function alternarModo() {
  modoEscuro = !modoEscuro; // alterna o estado da variável de controle
  if (modoEscuro) {
    // Alterna para as cores do modo escuro
    document.body.style.backgroundColor = "#21262D";
    document.body.style.color = "whitesmoke";

    var nome = document.getElementById('nome');
    var senha = document.getElementById('senha')
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var data = document.getElementById('data');
    var horario = document.getElementById('horario');
    var tipo = document.getElementById('tipo');
    var observacoes = document.getElementById('observacoes');
    var sub = document.getElementById('sub');
    var bota = document.getElementById('bota');
    var cpf = document.getElementById('cpf')

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
    // Alterna para as cores do modo claro
    document.body.style.backgroundColor = "";
    document.body.style.color = "";

    var nome = document.getElementById('nome');
    var senha = document.getElementById('senha')
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var data = document.getElementById('data');
    var horario = document.getElementById('horario');
    var tipo = document.getElementById('tipo');
    var observacoes = document.getElementById('observacoes');
    var sub = document.getElementById('sub');
    var bota = document.getElementById('bota');
    var cpf = document.getElementById('cpf')

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
// Adiciona uma máscara para limitar o preenchimento de alguns campos
$('#telefone').mask('(00) 00000-0000');
$('#data').mask('00/00/0000');
$('#horario').mask('00:00');
$('#cpf').mask('000.000.000-00', { reverse: true });
