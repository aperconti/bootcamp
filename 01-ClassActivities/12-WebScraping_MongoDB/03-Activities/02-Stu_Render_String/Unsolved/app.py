# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)

hobby = "skiing"
name = "Autum"
@app.route("/")
def home():
    return render_template("index.html", name="name", hobby= "hobby")



if __name__ == "__main__":
    app.run(debug=True)
