import mysql.connector
from flask import Flask, jsonify
from flask_cors import CORS  # permette richieste da Angular

# Connessione al database MySQL
mydb = mysql.connector.connect(
  host="localhost",
  user="pythonuser",
  password="password123",
  database="PokemonDB"
)
mycursor = mydb.cursor()

app = Flask(__name__)
CORS(app)  # abilita richieste da http://localhost:4200

# Route per la home page
@app.route("/")
def hello():
    return "Server Flask attivo!"

# Route per ottenere i Pokémon della Gen 1
@app.route("/gen1")
def gen1():
    mycursor.execute("SELECT name FROM PokeStats WHERE generation = 1")
    result = mycursor.fetchall()
    return jsonify([row[0] for row in result])

# Route per ottenere i Pokémon della Gen 2
@app.route("/gen2")
def gen2():
    mycursor.execute("SELECT name FROM PokeStats WHERE generation = 2")
    result = mycursor.fetchall()
    return jsonify([row[0] for row in result])

# Route per ottenere i Pokémon della Gen 3
@app.route("/gen3")
def gen3():
    mycursor.execute("SELECT name FROM PokeStats WHERE generation = 3")
    result = mycursor.fetchall()
    return jsonify([row[0] for row in result])

# Route per ottenere i Pokémon della Gen 4
@app.route("/gen4")
def gen4():
    mycursor.execute("SELECT name FROM PokeStats WHERE generation = 4")
    result = mycursor.fetchall()
    return jsonify([row[0] for row in result])

# Route per ottenere i Pokémon della Gen 5
@app.route("/gen5")
def gen5():
    mycursor.execute("SELECT name FROM PokeStats WHERE generation = 5")
    result = mycursor.fetchall()
    return jsonify([row[0] for row in result])

# Route per ottenere i Pokémon della Gen 6
@app.route("/gen6")
def gen6():
    mycursor.execute("SELECT name FROM PokeStats WHERE generation = 6")
    result = mycursor.fetchall()
    return jsonify([row[0] for row in result])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True) # Permette ad Angular (o altri client) di raggiungere il server Flask e farli comunicare
