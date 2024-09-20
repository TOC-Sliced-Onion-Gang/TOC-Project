from app import app
from flask import Blueprint, request
from app.regex import pypi
from app.regex.python_org.crawling import search as nornor
router = Blueprint('router', __name__)
@app.route("/member")
def member():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route('/pypi/search')
def pypi_search(): 
    query = request.args.get('q') or ''
    page = int(request.args.get('page') or 0)
    
    return {"result":list(pypi.search(query, page))} # metadata list, อาจจะ > 5 วิ

@app.route('/namning')
def namning():
    result = nornor('')
    return {"result":result}
