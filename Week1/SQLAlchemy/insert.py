import sqlalchemy as db
engine = db.create_engine('sqlite:///datacamp.sqlite')
conn = engine.connect()
metadata = db.MetaData()

Student = db.Table('Student', metadata, autoload_with=engine)

metadata.create_all(engine) 


#Insert one
query = db.insert(Student).values(Id=1, Name='Matthew', Major="English", Pass=True)
Result = conn.execute(query)

output = conn.execute(Student.select()).fetchall()
print(output)

#Insert many
query = db.insert(Student)
values_list = [{'Id':'2', 'Name':'Nisha', 'Major':"Science", 'Pass':False},
              {'Id':'3', 'Name':'Natasha', 'Major':"Math", 'Pass':True},
              {'Id':'4', 'Name':'Ben', 'Major':"English", 'Pass':False}]
Result = conn.execute(query,values_list)
output = conn.execute(Student.select()).fetchall()
print(output)