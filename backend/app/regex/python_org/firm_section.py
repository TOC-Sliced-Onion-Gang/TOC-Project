# web crawler File access, Internet data, Debugging, superseded modules
import requests
import re

url = 'https://docs.python.org/3.12/library/'
user_input = str(input('search for the library:'))

# Map section titles to corresponding href values
sections = {
    'File and Directory Access': 'filesys.html',
    'Internet Data Handling': 'netdata.html',
    'Debugging and Profiling': 'debug.html',
    'Superseded Modules': 'superseded.html'
}

def first_level(user_input):
    # Get the href corresponding to the user input
    
    user_input_lower = user_input.lower()

    sections_lower = {key.lower(): key for key in sections}
    
    if user_input_lower not in sections_lower:
        return f"Invalid section: '{user_input}'. Please choose from {list(sections.keys())}."
    
    original_section = sections_lower[user_input_lower]
    href_value = sections[original_section]
    anchor_pattern = rf'<a class="reference internal" href="{href_value}">([^<]+)</a>'
    
    response = requests.get(url)
    if response.status_code == 200:
        try:
            # Get the raw HTML content
            html_content = response.text

            # Find the match for the specific user input section
            match = re.search(anchor_pattern, html_content)
            
            if match:
                # Return the href and the title of the matched section
                return {'href': url + href_value, 'title': match.group(1)}
            else:
                return f"No match found for '{user_input}'."
        except Exception as e:
            return f"Error occurred: {str(e)}"

    # If the response status code is not 200, return the status code error
    return f"Failed to retrieve the page. Status code: {response.status_code}"

def second_level():
    first_level_data = first_level()
    if isinstance(first_level_data, dict):
        href = first_level_data['href']
    match(href):
        case 'https://docs.python.org/3.12/library/filesys.html':
            pass
        case 'http://docs.python.org/3.12/library/netdata.html':
            pass
        case 'https://docs.python.org/3.12/library/debug.html':
            pass
        case 'https://docs.python.org/3.12/library/superseded.html':
            pass
    
if __name__ == "__main__":
    print(first_level(user_input))