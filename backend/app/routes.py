from flask import Blueprint, request
from app.regex import pypi
from app.regex.python_org import sho_section
from app.regex.python_org.namning_section import search as nornor
router = Blueprint('router', __name__)


@router.route('/member')
def member():
    return {"members": ["Member1", "Member2", "Member3"]}

@router.route('/namning')
def namning():
    result = nornor('')
    return {"result":result}

@router.route('/pypi/search')
def pypi_search(): 
    query = request.args.get('q') or ''
    page = int(request.args.get('page') or 0)
    
    return list(pypi.search(query, page)) # metadata list, อาจจะ > 5 วิ

@router.route('/shogun')
def shogun():
    return list(sho_section.get()) # name list