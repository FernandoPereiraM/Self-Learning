import sqlalchemy as db
from sqlalchemy import func
engine = db.create_engine('sqlite:///datacamp.sqlite')
conn = engine.connect()
metadata = db.MetaData()

Student = db.Table('Student', metadata, autoload_with=engine)

metadata.create_all(engine) 

#----------------------------WHERE---------------------------------#
query = Student.select().where(Student.columns.Major == 'English')
#print(query) #SELECT "Student"."Id", "Student"."Name", "Student"."Major", "Student"."Pass" FROM "Student" WHERE "Student"."Major" = :Major_1
output = conn.execute(query)
print(output.fetchall())
#------------------------------------------------------------------#

#----------------------------AND-----------------------------------#
query = Student.select().where(db.and_(Student.columns.Major == 'English', Student.columns.Pass != True))
output = conn.execute(query)
print(output.fetchall())
#------------------------------------------------------------------#

#----------------------------IN------------------------------------#
query = Student.select().where(Student.columns.Major.in_(['English','Math']))
output = conn.execute(query)
print(output.fetchall())
#------------------------------------------------------------------#

#-------------------and, or, not-----------------------------------#
query = Student.select().where(db.or_(Student.columns.Major == 'English', Student.columns.Pass == True))
output = conn.execute(query)
print(output.fetchall())
#------------------------------------------------------------------#

#-------------------order by---------------------------------------#
query = Student.select().order_by(db.desc(Student.columns.Name))
output = conn.execute(query)
print(output.fetchall())
#------------------------------------------------------------------#
