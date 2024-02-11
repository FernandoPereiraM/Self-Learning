import sqlalchemy as db

engine = db.create_engine("sqlite:///european_database.sqlite")

conn = engine.connect()

metadata = db.MetaData()  # extracting the metadata
division = db.Table('divisions', metadata, autoload_with=engine)  # Table object

print(repr(metadata.tables['divisions']))
