import urllib
import re
import app.regex.pypi.shogun as sho_pypi
from app.regex.python_org import sho_section as sho_pyorg
from app.regex.python_org import best_section as best_pyorg
from app.regex.python_org import tung_section as tung_pyorg
from app.regex.python_org import jw_section as jw_pyorg
from app.regex.python_org import firm_section as firm_pyorg
from app.regex.python_org import namning_section as namning_pyorg

def get_detail(module_name):
        path ='https://docs.python.org/3/library/'+module_name+'.html' if module_name != 'lib2to3' else 'https://docs.python.org/3/library/2to3.html'
        try:
            with urllib.request.urlopen(path) as response:
                html = response.read().decode('utf-8')
        except urllib.error.HTTPError:
            return {'name':module_name, 'action':"No information provided",'description':"No description provided"}
        
        module_name = module_name if module_name != 'lib2to3' else '2to3'
        action = re.findall(f'<meta property="og:title" content="{module_name} — (.+?)"', html)
        description = re.findall(r'<meta property="og:description" content="(.+?)"', html)

        if not action: action = ["No information provided"]
        if not description: description = ["No description provided"]

        return {'name':module_name, 'action':action[0],'description':description[0], 'author':'-'}

def get_all():
    lib_names = []
    lib_names += sho_pyorg.get()
    lib_names += tung_pyorg.get()
    lib_names += jw_pyorg.get()
    lib_names += firm_pyorg.get()
    lib_names += best_pyorg.get()
    lib_names += best_pyorg.get()
    lib_names += namning_pyorg.get()
    lib_names = list(set(lib_names))

    results = []
    for lib_name in lib_names:
        desc = get_detail(lib_name)
        results.append(desc)

    return results

def search(keyword):
    pass

def get_random():
    pass
