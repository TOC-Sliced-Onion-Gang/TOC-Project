from flask import Flask
from flask_cors import CORS
from app.regex import regex_2

app = Flask(__name__)
CORS(app)

app.register_blueprint(regex_2.router, url_prefix='/regex_2')