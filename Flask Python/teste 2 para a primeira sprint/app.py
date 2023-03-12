import os
from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    template_dir = os.path.abspath(os.path.dirname(__file__))
    template_path = os.path.join(template_dir, 'index.html')
    return render_template(template_path)
    

@app.route('/cadastrar', methods=['POST'])
def cadastrar():
    # Obter os dados do formulário
    nome = request.form['nome']
    nomesocial = request.form['nomesocial']
    CPF = request.form['CPF']
    email = request.form['email']
    telefone = request.form['telefone']
    curso = request.form['curso']
    motivo = request.form['motivo']
    preferencia = request.form['preferencia']
    cartao_vacina = request.files['cartao_vacina']

    # Salvar os dados no banco de dados
    try:
        conn = sqlite3.connect('cadastro.db')
        cursor = conn.cursor()

        cursor.execute('''
            CREATE TABLE IF NOT EXISTS cadastro (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                nomesocial TEXT,
                CPF TEXT NOT NULL,
                email TEXT NOT NULL,
                telefone TEXT NOT NULL,
                curso TEXT NOT NULL,
                motivo TEXT NOT NULL,
                preferencia TEXT NOT NULL,
                cartao_vacina BLOB NOT NULL
            )
        ''')

        cursor.execute('INSERT INTO cadastro (nome, nomesocial, CPF, email, telefone, curso, motivo, preferencia, cartao_vacina) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                       (nome, nomesocial, CPF, email, telefone, curso, motivo, preferencia, cartao_vacina.read()))

        conn.commit()
        conn.close()

        # Redirecionar para a página de confirmação
        return redirect(url_for('cadastro_realizado'))

    except Exception as e:
        # Redirecionar para a página de erro
        return redirect(url_for('erro_cadastro', error=e))

@app.route('/cadastro_realizado')
def cadastro_realizado():
    return render_template('cadastro_realizado.html')

@app.route('/erro_cadastro/<error>')
def erro_cadastro(error):
    return f"<h1>Ocorreu um erro no cadastro: {error}</h1>"
