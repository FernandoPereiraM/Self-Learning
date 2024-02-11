import sqlalchemy as db
engine = db.create_engine('sqlite:///datacamp.sqlite')
conn = engine.connect()
metadata = db.MetaData()

Student = db.Table('Student', metadata, autoload_with=engine)

metadata.create_all(engine) 

output = conn.execute(db.text("SELECT * FROM Student"))
print(output.fetchall())
