from flask import Blueprint, request
from app.regex.combine_regex import get_all as get_all_regex, get_random, search as search_regex, get_all_name
from app.regex.pypi import shogun

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
    delimiter = request.args.get('d') or ','
    names = get_all_name()
    content = delimiter.join(names)

    return content

# for testing
@router.route('/list')
def list_name():
    from itertools import chain
    from app.regex.python_org import (
        sho_section, 
        tung_section, 
        jw_section, 
        firm_section, 
        namning_section, 
        paul_section, 
        ink_section, 
        best_section,
    )
    
    all_n = {
        'sho': list(sho_section.get()),
        'tung': list(tung_section.get()),
        'firm': list(firm_section.get()),
        'jw': list(jw_section.get()),
        'namning': list(namning_section.get()),
        'paul': list(paul_section.get()),
        'ink': list(ink_section.get()),
        'best': list(best_section.get())
    }
    lenmap = map(len, all_n.values())
    print(sum(lenmap))
    
    unique = set(chain.from_iterable(all_n.values()))
    print(len(unique))
    
    return all_n

@router.route('/pypi/search')
def pypi_search(): 
    query = request.args.get('q') or ''
    page = int(request.args.get('page') or 0)
    
    return list(shogun.search(query, page)) # metadata list, อาจจะ > 5 วิ
