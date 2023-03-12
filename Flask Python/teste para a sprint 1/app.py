from flask import Flask, render_template, request

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/cadastrar', methods=['POST'])
def cadastrar():
    if request.method == 'POST':
        # Receba os dados do formulário
        nome = request.form['nome']
        nomesocial = request.form['nomesocial']
        cpf = request.form['CPF']
        email = request.form['email']
        telefone = request.form['telefone']
        curso = request.form['curso']
        motivo = request.form['motivo']
        preferencia = request.form['preferencia']
        cartao_vacina = request.files['cartao_vacina']
        
        # Insira os dados no banco de dados
import sqlite3

# conexão com o banco de dados
conn = sqlite3.connect('cadastro.db')
cursor = conn.cursor()

# verifica se a tabela já existe
cursor.execute('''SELECT count(name) FROM sqlite_master WHERE type='table' AND name='cadastro' ''')
if cursor.fetchone()[0]==1:
    print('Tabela já existe.')
else:
    # cria a tabela
    cursor.execute('CREATE TABLE cadastro (id INTEGER PRIMARY KEY, nome TEXT, nomesocial TEXT, cpf TEXT, email TEXT, telefone TEXT, curso TEXT, motivo TEXT, preferencia TEXT, cartao_vacina BLOB)')

# fecha a conexão
conn.close()

if __name__ == '__main__':
    app.run(debug=True)


