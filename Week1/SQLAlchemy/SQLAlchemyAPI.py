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

#-------------------sum, avg, count, min, max----------------------#
query = db.select([db.func.sum(Student.columns.Id)])
output = conn.execute(query)
print(output.fetchall())
#------------------------------------------------------------------#

#-------------------group by---------------------------------------#
query = db.select([db.func.sum(Student.columns.Id),Student.columns.Major]).group_by(Student.columns.Pass)
output = conn.execute(query)
print(output.fetchall())
#------------------------------------------------------------------#

#-------------------distinct---------------------------------------#
query = db.select([Student.columns.Major.distinct()])
output = conn.execute(query)
print(output.fetchall())
#------------------------------------------------------------------#
