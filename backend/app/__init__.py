from flask import Flask
from flask_cors import CORS
from app.regex import regex_2

app = Flask(__name__)
CORS(app)


from app.routes import router

app.register_blueprint(router)