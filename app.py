from flask import Flask, render_template, request
from dict import *

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("test.html", food_dict = food_dict)


@app.route("/", methods = ["POST"])
def result():
    food_item = request.form.get("food")
    carbon_footprint = food_dict[food_item]
    food_name = food_item.lower()
    printout = "Every 1 kg/ 1 L of {food} consumed, {num} kg of carbon dioxide is produced.".format(food = food_name, num = carbon_footprint)
    return printout

if __name__ == "__main__":
    app.run(debug = True, port = 5001)