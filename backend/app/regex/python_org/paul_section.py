import urllib.request
import re

class PythonDocsScraper:
    MAIN_URL = "https://docs.python.org/3.12/library/"
    
    def __init__(self):
        self.to_search = ["Binary Data", "Cryptographic Services", "Internationalization", "Importing Modules"]
        self.__pattern_for_lib_name = r"""<span class="pre">(.*)</span></code>"""
        self.__pattern_for_sub_url = f"""<a class="reference internal" href="(.*\.html)">%s</a>"""
    
    def __clean(self, found_items):
        results = []
        for item in found_items:
            if "</span>" in item:
                item = item[:item.find("</span>")]
            if len(item) == 1 and not re.match(r"[a-zA-Z]", item) or item in results:
                continue
            else:
                results.append(item)
        return results

    def get_each_lib_detail(self, url):
        html = urllib.request.urlopen(url).read().decode('utf-8')
        found_items = re.findall(self.__pattern_for_lib_name, html)
        found_items = self.__clean(found_items)
        return found_items

    def get_lib_name(self):
        with urllib.request.urlopen(self.MAIN_URL) as response:
            html = response.read().decode('utf-8')

        sub_url_tail = []
        for title in self.to_search:
            s = self.__pattern_for_sub_url % title
            sub_url_tail.extend(re.findall(s, html))  
        
        lib_names = []
        for tail in sub_url_tail:
            lib_names += self.get_each_lib_detail(self.MAIN_URL + tail)
        
        return lib_names

def get():
    scraper = PythonDocsScraper()
    return scraper.get_lib_name()

# print(get())
