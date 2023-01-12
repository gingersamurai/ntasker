from flask import Flask
from ntasker_flask.view import bp

app = Flask(__name__)
app.register_blueprint(bp)

@app.route('/')
def hello():
    return 'Hello, World!'

