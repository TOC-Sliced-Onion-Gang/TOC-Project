import re
import requests
from flask import Blueprint, request

DOMAIN = 'https://pypi.org'
router = Blueprint('regex_2', __name__)

@router.route('/search')
    
def search():#(query: str, page: int = 1):
    query = request.args.get('q') or ''
    page = request.args.get('page')
    with requests.Session() as session:
        search_html = session.get(f'{DOMAIN}/search/', 
            params={
                'q': query,
                'page': page
            }
        ).text
        lst = []
        
        for path in re.findall('"package-snippet" href="([^"]+)"', search_html):
            lib_html = session.get(f'{DOMAIN}{path}').text
            
            name = re.search(r'header__name">\s*(\w+)', lib_html, re.DOTALL)
            author = re.search(r'Author:.*?"(.*?)">\s*(.*?)\s*<', lib_html, re.DOTALL)
            action = re.search(r'description__summary">\s*(.*?)\s*<', lib_html, re.DOTALL)
            description = re.search(r'<div class="project-description">.*?</div>', lib_html, re.DOTALL)
            
            lst.append({
                'name': name and name.group(1),
                'author': 
                    author and {
                        'addr': author.group(1),
                        'name': author.group(2),
                    },
                'action': action and action.group(1),  
                'description': None # description and description.group(),
            })
        
        return lst