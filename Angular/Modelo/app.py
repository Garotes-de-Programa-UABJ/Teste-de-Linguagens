from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/agendar', methods=['POST'])
def agendar():
    nome = request.form['nome']
    email = request.form['email']
    telefone = request.form['telefone']
    data = request.form['data']
    horario = request.form['horario']
    # salve os dados do agendamento no banco de dados
    return render_template('confirmacao.html', nome=nome, data=data, horario=horario)


if __name__ == '__main__':
    app.run(debug=True)
