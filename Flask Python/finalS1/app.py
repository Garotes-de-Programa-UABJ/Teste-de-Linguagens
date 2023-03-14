from flask import Flask, render_template, request
import sqlite3

#Importa os módulos necessários para a aplicação Flask, incluindo a classe Flask, render_template para renderização de templates HTML e sqlite3 para trabalhar com um banco de dados SQLite.

app = Flask("finalS1")

#Cria uma instância do objeto Flask para a aplicação.

@app.route('/')
def home():
    return render_template('home.html')

#Define uma rota com o endereço '/' para a função home(), que retorna um template HTML chamado "home.html".

@app.route('/add_user', methods=['POST'])
def add_user():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    name = request.form['name']
    email = request.form['email']
    password = request.form['password']
    cursor.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", (name, email, password))
    conn.commit()
    conn.close()
    return "Usuário cadastrado com sucesso"

#Define uma rota com o endereço '/add_user' e método POST para a função add_user(). Essa função abre uma conexão com um banco de dados SQLite, extrai os dados do formulário HTML usando o objeto request, insere as informações do usuário no banco de dados e retorna uma mensagem indicando que o usuário foi cadastrado com sucesso.
