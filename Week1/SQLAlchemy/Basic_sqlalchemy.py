import sqlalchemy as db

engine = db.create_engine("sqlite:///european_database.sqlite")

conn = engine.connect()

metadata = db.MetaData()  # extracting the metadata
division = db.Table('divisions', metadata, autoload_with=engine)  # Table object

print(repr(metadata.tables['divisions']))  # Print Metadata
print(division.columns.keys())  # Print name-colums

# ---------------------------------------------------#
query = division.select()  # SELECT * FROM divisions
print(query)  # See the query!
# ---------------------------------------------------#
exe = conn.execute(query)  # executing the query
result = exe.fetchmany(5)  # extracting top 5 results
print(result)  # Results
# ---------------------------------------------------#
