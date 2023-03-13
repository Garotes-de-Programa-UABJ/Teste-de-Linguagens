from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

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

