import mysql.connector
import pandas as pd

mydb = mysql.connector.connect(
  host="localhost",
  user="pythonuser",
  password="password123"
)
mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE IF NOT EXISTS PokemonDB")

mycursor.execute("""
  CREATE TABLE IF NOT EXISTS PokemonDB.PokeStats (
    Unit VARCHAR(30) NOT NULL,
    Cost INTEGER,
    Hit_Speed VARCHAR(30),
    Speed VARCHAR(30),
    Deploy_Time VARCHAR(30),
    Range_ VARCHAR(30),
    Target VARCHAR(30),
    Count VARCHAR(30),
    Transport VARCHAR(30),
    Type VARCHAR(30),
    Rarity VARCHAR(30),
    PRIMARY KEY (Unit)
  );""")

mycursor.execute("DELETE FROM PokemonDB.PokeStats")
mydb.commit()

poke_stats = pd.read_csv('./cr-unit-attributes.csv', index_col=False, delimiter = ',')
poke_stats = poke_stats.fillna('Null')
print(poke_stats.head(20))

for i,row in poke_stats.iterrows():
    cursor = mydb.cursor()

    sql = "INSERT INTO PokemonDB.PokeStats VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    cursor.execute(sql, tuple(row))
    print("Record inserted")
    
    mydb.commit() 

mycursor.execute("SELECT * FROM PokemonDB.PokeStats")
myresult = mycursor.fetchall()

for x in myresult:
  print(x)