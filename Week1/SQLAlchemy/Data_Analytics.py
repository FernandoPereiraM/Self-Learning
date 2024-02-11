import sqlalchemy as db
import pandas as pd

engine = db.create_engine("sqlite:///european_database.sqlite")
conn = engine.connect()
metadata = db.MetaData()
division = db.Table('divisions', metadata, autoload_with=engine)
match = db.Table('matchs', metadata,autoload_with=engine)


#Connecting two tables
#Running complex query
query = db.select([division,match]).\
select_from(division.join(match,division.columns.division == match.columns.Div)).\
where(db.and_(division.columns.division == "E1", match.columns.season == 2009 )).\
order_by(match.columns.HomeTeam)
output = conn.execute(query)
results = output.fetchall()

data = pd.DataFrame(results)
data.columns = results[0].keys()
data
print(data)