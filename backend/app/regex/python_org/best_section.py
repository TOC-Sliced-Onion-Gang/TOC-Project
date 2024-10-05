import re
import urllib.error
import urllib.response
import requests

import urllib.request

class RegexBest:
    MAINURL = "https://docs.python.org/3.12/library/"
    def __init__(self):
        self.to_search = ["Data Types", 
                          "Generic Operating System Services", 
                          "Program Frameworks", 
                          "Python Language Services",
                          ]
        self.__pattern_for_lib_name = r"""<span class="pre">(.*)</span></code>"""
        self.__pattern_for_sub_url = f"""<a class="reference internal" href="(.*\.html)">%s</a>"""

    def __clean(self, found_items):
        results = []
        for item in found_items:
            if "</span>" in item: item = item[:item.find("</span>")]
            if len(item) == 1 and not re.match(r"[a-zA-Z]", item) or item in results: continue
            else: results.append(item)

        return results

    def get_each_lib_detail(self, url):
        html = requests.get(url).text
        found_items = re.findall(self.__pattern_for_lib_name, html)
        found_items = self.__clean(found_items)
        return found_items
        
    def get_lib_name(self):
        with urllib.request.urlopen(self.MAINURL) as response:
            html = response.read().decode('utf-8')

        sub_url_tail = []
        for title in self.to_search:
            s = self.__pattern_for_sub_url % title
            sub_url_tail.append(*re.findall(s, html))
        
        lib_names = []
        for tail in sub_url_tail:
            lib_names += self.get_each_lib_detail(self.MAINURL + tail)

        return lib_names
    
def get():
    regex_machine = RegexBest()
    return regex_machine.get_lib_name()
