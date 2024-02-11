import sqlalchemy as db
import pandas as pd
engine = db.create_engine('sqlite:///datacamp.sqlite')
conn = engine.connect()
metadata = db.MetaData()

Student = db.Table('Student', metadata, autoload_with=engine)

metadata.create_all(engine) 

#------------------------------------------------#
query = Student.select().where(Student.columns.Major.in_(['English','Math']))
output = conn.execute(query)
results = output.fetchall()
#------------------------------------------------#
data = pd.DataFrame(results)
print(data)
data