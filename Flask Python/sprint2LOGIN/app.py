import sqlite3
from flask import Flask, render_template, request, redirect
from passlib.hash import sha256_crypt

app = Flask(__name__, static_folder='static')

def create_table():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)")
    conn.commit()
    conn.close()

create_table()

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/auth', methods=['POST'])
def auth():
    username = request.form['username']
    password = request.form['password']
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE username = ?", (username,))
    data = c.fetchone()
    conn.close()
    if data:
        if sha256_crypt.verify(password, data[1]):
            return redirect('/success')
        else:
            return redirect('/loginerror')
    
@app.route ('/loginerror')
def loginerror():
    return render_template ('/loginerror.html')

@app.route('/success')
def success():
    return render_template('success.html')

@app.route('/cadastrar')
def cadastrar():
    return render_template('cadastrar.html')

@app.route('/cadastro', methods=['POST'])
def cadastro():
    username = request.form['username']
    password = sha256_crypt.hash(request.form['password'])
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
    conn.commit()
    conn.close()    
    return redirect('/cadastradosucesso.html')

@app.route ('/cadastradosucesso.html')
def cadastradosucesso():
    return render_template('cadastradosucesso.html')


if __name__ == '__main__':
    app.run(debug=True)
