from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/appointments')
def appointments():
    conn = sqlite3.connect('database.db')
    data = conn.execute('SELECT * FROM appointments')
    return render_template('appointments.html', appointments=data)

@app.route('/add_appointment', methods=['POST'])
def add_appointment():
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    date = request.form['date']
    time = request.form['time']

    conn = sqlite3.connect('database.db')
    conn.execute('INSERT INTO appointments (NAME, EMAIL, PHONE, DATE, TIME) VALUES (?, ?, ?, ?, ?)', (name, email, phone, date, time))
    conn.commit()
    conn.close()

    return render_template('success.html')

if __name__ == '__main__':
    app.run(debug=True)
