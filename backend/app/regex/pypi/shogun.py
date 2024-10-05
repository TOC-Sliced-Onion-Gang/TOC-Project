import re
import requests

DOMAIN = 'https://pypi.org'


def search(query: str, page: int = 1):
    with requests.Session() as session:
        search_html = session.get(f'{DOMAIN}/search/',
            params={
                'q': query,
                'page': page
            }
        ).text

        for path in re.findall(r'"package-snippet" href="(.*?)"', search_html):
            lib_html = session.get(f'{DOMAIN}{path}').text

            name = re.search(r'header__name">\s*([\w-]+)', lib_html, re.DOTALL)
            author = re.search(r'Author:.*?"(.*?)">\s*(.*?)\s*<', lib_html, re.DOTALL)
            action = re.search(r'description__summary">\s*(.*?)\s*<', lib_html, re.DOTALL)
            description = re.search(r'<div class="project-description">.*?</div>', lib_html, re.DOTALL)

            yield {
                'name': name and name.group(1),
                'author': author and author.group(2),
                'action': action and action.group(1),
                'description': description and description.group(),
            }