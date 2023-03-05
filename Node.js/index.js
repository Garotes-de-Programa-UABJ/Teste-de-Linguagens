const express = require ('express'); //usar rota express como caminho , importa o módulo do Express.js.
const app = express(); //Cria uma instância do objeto Express.js.
const path = require('path'); // Importa o módulo path para trabalhar com caminhos de arquivo.
const router = express.Router(); //Cria uma instância do objeto Router do Express.js para gerenciar as rotas da aplicação.

router.get('/', function(req,res){ // Define uma rota para a URL raiz (ou seja, '/') da aplicação, utilizando o método get() do roteador. 
    res.sendFile(path.join(__dirname+'/indextest.html')); //ela envia o arquivo "indextest.html" como resposta utilizando o método sendFile().
})

app.use('/', router); // Define que todas as solicitações feitas para a raiz da aplicação serão tratadas pelo roteador.

app.listen(process.env.port || 3000); // Inicia o servidor HTTP na porta 3000 (ou na porta especificada pela variável de ambiente port, caso exista).
                                      
console.log("server rodandoo"); // Imprime no console (cmd) uma mensagem informando que o servidor está rodando.
