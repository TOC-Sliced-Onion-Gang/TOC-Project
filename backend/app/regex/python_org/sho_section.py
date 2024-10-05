import re
import requests

DOMAIN = 'https://docs.python.org/3.12/library/'
my_title = [
    'Data Compression and Archiving',
    'Internet Protocols and Support',
    'Python Runtime Services',
]

def get():
    session = requests.Session()
    html = session.get(DOMAIN).text

    for title in my_title:
        match = re.search(rf'href="(.*?)">{title}', html)
        assert match
        
        path = match.group(1)
        page = session.get(f'{DOMAIN}{path}').text

        yield from re.findall(r'toctree-l1.*?class="pre">(.*?)<', page)


if __name__ == '__main__':
    print(*get())