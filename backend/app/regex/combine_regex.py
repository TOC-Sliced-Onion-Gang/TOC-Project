import random
import urllib
import re
import functools
from rapidfuzz.process import extract
from rapidfuzz.fuzz import partial_ratio
import app.regex.pypi.shogun as sho_pypi
from app.regex.python_org import (
    sho_section as sho_pyorg,
    tung_section as tung_pyorg,
    jw_section as jw_pyorg,
    firm_section as firm_pyorg,
    namning_section as namning_pyorg,
    paul_section as paul_pyorg,
    ink_section as ink_pyorg,
    best_section as best_pyorg,
)

@functools.cache
def get_detail(module_name):
    path ='https://docs.python.org/3/library/'+module_name+'.html' if module_name != 'lib2to3' else 'https://docs.python.org/3/library/2to3.html'
    try:
        with urllib.request.urlopen(path) as response: # type: ignore
            html = response.read().decode('utf-8')

    except urllib.error.HTTPError: # type: ignore
        return {
            'name': module_name,
            'action': "No information provided",
            'description': "No description provided",
            'url':"#"
        }

    module_name = module_name if module_name != 'lib2to3' else '2to3'
    action = re.findall(f'<meta property="og:title" content="{module_name} — (.+?)"', html)
    description = re.findall(r'<meta property="og:description" content="(.+?)"', html)

    if not action: action = ["No information provided"]
    if not description: description = ["No description provided"]

    return {
        'name': module_name,
        'action': action[0],
        'description': description[0],
        'author': 'python.org',
        'url': path
        
    }

def get_details(lib_names):
    results = []
    for module_name in lib_names:
        detail = get_detail(module_name)
        results.append(detail)

    return results

@functools.cache
def get_all_name():
    lib_names = []
    lib_names += sho_pyorg.get()
    lib_names += tung_pyorg.get()
    lib_names += jw_pyorg.get()
    lib_names += ink_pyorg.get()
    lib_names += firm_pyorg.get()
    lib_names += best_pyorg.get()
    lib_names += namning_pyorg.get()
    lib_names += paul_pyorg.get()

    return set(lib_names)

def get_all():
    lib_names = get_all_name()
    results = get_details(lib_names)

    return results

def search(keyword, limit):
    all_regs = get_all_name()
    filterd = extract(keyword, all_regs, limit=limit, scorer=partial_ratio, score_cutoff=60)
    found_libs = [name for name, *_ in filterd]

    return get_details(found_libs)

def get_random(num):
    rand_num = random.randint(1, 7)

    match rand_num:
        case 1:
            lib_names = sho_pyorg.get()
        case 2:
            lib_names = tung_pyorg.get()
        case 3:
            lib_names = jw_pyorg.get()
        case 4:
            lib_names = firm_pyorg.get()
        case 5:
            lib_names = best_pyorg.get()
        case 6:
            lib_names = namning_pyorg.get()
        case _:
            lib_names = paul_pyorg.get()

    lib_names = list(set(lib_names))[:num]
    random.shuffle(lib_names)

    results = get_details(lib_names)

    return results