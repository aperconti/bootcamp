from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# @TODO: setup mongo connection
# Create connection variable
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)


# @TODO: connect to mongo db and collection
db = client.store_inventory
produce = db.produce


@app.route('/')
def index():
    # @TODO: write a statement that finds all the items in the db and sets it to a variable
    # CODE GOES HERE
    inventory = list(produce.find())
    print(inventory)

    # @TODO: render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", inventory=inventory)


if __name__ == "__main__":
    app.run(debug=True)
