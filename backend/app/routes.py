from app import app
from flask import Blueprint, request
from app.regex.python_org.namning_section import search as nornor
router = Blueprint('router', __name__)
@app.route("/member")
def member():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route('/namning')
def namning():
    result = nornor('')
    return {"result":result}
