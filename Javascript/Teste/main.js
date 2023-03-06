const form = document.querySelector('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const data = document.getElementById('data');
const horario = document.getElementById('horario');
const tipo = document.getElementById('tipo');
const observacoes = document.getElementById('observacoes');

// Adicionar evento de envio ao formulário
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que a página seja recarregada
  // Verifica se todos os campos foram preenchidos
  if (nome.value !== '' && email.value !== '' && telefone.value !== '' && data.value !== '' && horario.value !== '') {
    // Exibe mensagem de sucesso e limpa o formulário
    alert('Agendamento realizado com sucesso!');
    confete();
    form.reset();
  } else {
    // Exibe mensagem de erro
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
});
