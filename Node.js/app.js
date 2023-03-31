const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//iniciando o servidor
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/indextest.html');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});


//conexão com o bd
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'test1',
  password: '123456',
  database: 'test'
});

connection.connect(function(err){
    if (err){
        console.error('erro conecting:'+err.stack);
        return;
    }
    console.log('connected as id'+ connection.threadId)
});

//capturo o que foi inserido no html

// Adiciona o middleware do body-parser ao aplicativo
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// função bodyParser é responsável por nalisar
// o corpo da solicitação e o transforma em um objeto JavaScript que pode ser facilmente acessado dentro do código do servidor.

app.post('/login', (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  // insira as respostas no banco de dados usando a conexão
  const query = `INSERT INTO dados (email, senha) VALUES ('${email}', '${senha}')`;

  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(`Usuário ${email} cadastrado com sucesso!`);
    res.send('Cadastro realizado com sucesso!');
  });
});

