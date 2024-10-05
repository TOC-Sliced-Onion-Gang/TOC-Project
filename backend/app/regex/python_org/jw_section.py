import re
import requests
import functools

DOMAIN = 'https://docs.python.org/3.12/library/'
my_title = [
    'Data Persistence',
    'Structured Markup Processing Tools',
    'Software Packaging and Distribution',
]

@functools.cache
def get():
    session = requests.Session()
    html = session.get(DOMAIN).text

    for title in my_title:
        match = re.search(rf'href="(.*?)">{title}', html)
        assert match

        path = match.group(1)
        page = session.get(f'{DOMAIN}{path}').text

        for lib_path in re.findall(r'toctree-l1.*?href="(.*?)"', page):
            lib_html = session.get(f'{DOMAIN}{lib_path}').text

            if re.search(r'>Source code:<strong>', lib_html):
                name = re.search(r'<title>(\w+)', lib_html)
                assert name

                yield name.group(1)