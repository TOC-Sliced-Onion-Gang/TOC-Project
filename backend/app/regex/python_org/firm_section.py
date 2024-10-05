# web crawler File access, Internet data, Debugging, superseded modules
import requests
import re

url = 'https://docs.python.org/3.12/library/'

sections = {
    'File and Directory Access': 'filesys.html',
    'Internet Data Handling': 'netdata.html',
    'Debugging and Profiling': 'debug.html',
    'Superseded Modules': 'superseded.html'
}
def first_level(user_input):
    user_input_lower = user_input.lower()
    sections_lower = {key.lower(): key for key in sections}

    if user_input_lower not in sections_lower:
        return {'error': f"Invalid section: '{user_input}'. Please choose from {list(sections.keys())}."}
    
    original_section = sections_lower[user_input_lower]
    href_value = sections[original_section]
    anchor_pattern = rf'<a class="reference internal" href="{href_value}">([^<]+)</a>'
    
    try:
        response = requests.get(url)
        response.raise_for_status()  
        
        html_content = response.text
        match = re.search(anchor_pattern, html_content)
        
        if match:
            return {'href': url + href_value, 'title': match.group(1)}
        else:
            return {'error': f"No match found for '{user_input}'."}
    
    except requests.exceptions.RequestException as e:
        return {'error': f"Error occurred while fetching first level: {str(e)}"}

def second_level(href):
    try:
        response = requests.get(href)
        response.raise_for_status()  
        
        html_content = response.text
        return extract_modules(html_content)
    
    except requests.exceptions.RequestException as e:
        return {'error': f"Error occurred while fetching second level: {str(e)}"}

def extract_modules(html_content):
    return re.findall(r'<li class="toctree-l1"><a class="reference internal".*?<code class="xref py py-mod docutils literal notranslate"><span class="pre">(.*?)</span></code>', html_content, re.DOTALL)

def get():
    all_libraries = []
    for section_name in sections.keys():
        first_level_data = first_level(section_name)
        if 'href' in first_level_data:
            href = first_level_data['href']
            libraries = second_level(href)
            if isinstance(libraries, list):
                all_libraries.extend(libraries)

    return list(set(all_libraries))