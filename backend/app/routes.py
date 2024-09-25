from flask import Blueprint, request ,jsonify
from app.regex import pypi
from app.regex.python_org import sho_section
from app.regex.python_org.firm_section import first_level,second_level,sections

router = Blueprint('router', __name__)


@router.route('/member')
def member():
    return {"members": ["Member1", "Member2", "Member3"]}

@router.route('/pypi/search')
def pypi_search(): 
    query = request.args.get('q') or ''
    page = int(request.args.get('page') or 0)
    
    return list(pypi.search(query, page)) # metadata list, อาจจะ > 5 วิ

@router.route('/shogun')
def shogun():
    return list(sho_section.get()) # name list

@router.route('/firm',methods=['GET'])
def firm():
    # Check for a query parameter to perform a search
    all_libraries = []
    for section_name in sections.keys():
        first_level_data = first_level(section_name)
        if 'href' in first_level_data:
            href = first_level_data['href']
            libraries = second_level(href)
            if isinstance(libraries, list):
                all_libraries.extend(libraries) 

    return jsonify(all_libraries)
