from sqlalchemy import create_engine

# Create the engine to connect to the SQLite database
engine = create_engine('sqlite:///datacamp.sqlite')

try:
    # Attempt to connect to the database
    connection = engine.connect()
    
    # If no errors occur, print a success message
    print("Connection successful!")
    
    # Close the connection
    connection.close()
except Exception as e:
    # If an error occurs, print the error message
    print("Error:", e)