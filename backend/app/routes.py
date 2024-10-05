from flask import Blueprint, request ,jsonify
from app.regex.combine_regex import get_all as get_all_regex, get_random, search as search_regex, get_all_name
from app.regex.pypi import shogun
from app.regex.python_org import sho_section
from app.regex.python_org import tung_section
from app.regex.python_org import firm_section
from app.regex.python_org import jw_section
from app.regex.python_org.namning_section import search as nornor

router = Blueprint('router', __name__)


@router.route('/member')
def member():
    return {"members": ["Member1", "Member2", "Member3"]}

@router.route('/get_all')
def get_all():
    return get_all_regex()

@router.route('/random')
def random():
    num = request.args.get('num') or '12'
    num = int(num)
    found_libs = get_random(num)

    return found_libs

@router.route('/search')
def search():
    query = request.args.get('q') or ''
    found_libs = search_regex(query)

    return found_libs

@router.route('/csv1')
def all_name1():
    names = get_all_name()
    content = '\r\n'.join(names)

    return content

@router.route('/csv2')
def all_name2():
    names = get_all_name()
    content = ','.join(names)

    return content

@router.route('/pypi/search')
def pypi_search(): 
    query = request.args.get('q') or ''
    page = int(request.args.get('page') or 0)
    
    return list(shogun.search(query, page)) # metadata list, อาจจะ > 5 วิ
