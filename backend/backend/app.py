from flask import Flask

app = Flask(__name__)

@app.route("/api/hello")
def index():
    return "hello"
