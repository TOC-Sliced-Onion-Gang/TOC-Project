from flask import Blueprint, request
from app.regex import pypi
from app.regex.python_org import sho_section

router = Blueprint('router', __name__)


@router.route('/member')
def member():
    return {"members": ["Member1", "Member2", "Member3"]}

@router.route('/pypi/search') # อาจจะ > 5 วิ
def pypi_search(): 
    query = request.args.get('q') or ''
    page = int(request.args.get('page') or 0)
    
    return list(pypi.search(query, page))

@router.route('/shogun')
def shogun():
    return list(sho_section.get())