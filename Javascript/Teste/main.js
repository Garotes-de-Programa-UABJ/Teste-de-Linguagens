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
const observacoes = document.getElementById('observacoes');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que a página seja recarregada

  // Verifica se todos os campos foram preenchidos
  if (nome.value !== '' && email.value !== '' && telefone.value !== '' && data.value !== '' && horario.value !== '' && senha.value !== '') {
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
