import mysql.connector
import pandas as pd

mydb = mysql.connector.connect(
    host="localhost",
    user="pythonuser",
    password="password123"
)

mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE IF NOT EXISTS PokemonDB")
mycursor.execute("USE PokemonDB")
mycursor.execute("DROP TABLE IF EXISTS PokeStats")

mycursor.execute("""
CREATE TABLE PokeStats (
    id INT NOT NULL,
    name VARCHAR(255),
    type1 VARCHAR(10),
    type2 VARCHAR(10),
    total INT,
    HP INT,
    attack INT,
    defence INT,
    sp_atk INT,
    sp_def INT,
    speed INT,
    generation INT,
    legendary BOOLEAN,
    image VARCHAR(500) NOT NULL
);
""")

mycursor.execute("DELETE FROM PokeStats")
mydb.commit()

poke_stats = pd.read_csv('Pokemon.csv', index_col=False, delimiter=',')
poke_stats = poke_stats.fillna('Null')
print(poke_stats.head(20))

max_name_length = 255

sql = """
INSERT INTO PokeStats
(id, name, type1, type2, total, HP, attack, defence, sp_atk, sp_def, speed, generation, legendary, image)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
"""

for i, row in poke_stats.iterrows():
    row_list = row.tolist()
    if len(row_list[1]) > max_name_length:
        row_list[1] = row_list[1][:max_name_length]
    mycursor.execute(sql, row_list)
    print("Record inserted")
    mydb.commit()

mycursor.execute("SELECT * FROM PokeStats")
myresult = mycursor.fetchall()

for x in myresult:
    print(x)