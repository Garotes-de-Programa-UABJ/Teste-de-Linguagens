import sqlite3

conn = sqlite3.connect('database.db')
print("Banco de dados aberto com sucesso")

conn.execute('''CREATE TABLE appointments
             (ID INTEGER PRIMARY KEY AUTOINCREMENT,
             NAME TEXT NOT NULL,
             EMAIL TEXT NOT NULL,
             PHONE TEXT NOT NULL,
             DATE TEXT NOT NULL,
             TIME TEXT NOT NULL);''')
print("Tabela criada com sucesso")

conn.close()
