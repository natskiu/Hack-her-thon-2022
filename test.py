from flask import Flask, render_template, request
from dict import *

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"