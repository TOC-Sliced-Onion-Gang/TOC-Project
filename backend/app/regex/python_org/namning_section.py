import urllib.request
import re
def crawler_first_level():
    with urllib.request.urlopen('https://docs.python.org/3.12/library/') as response:
        html = response.read().decode('utf-8')
    x = re.findall(r'href="[^"]*\.html"', html)
    task = ['href=\"development.html\"','href=\"functional.html\"','href=\"ipc.html\"','href=\"unix.html\"']
    output = []
    for i in x :
        if i in task :
            output.append(i[6:len(i)-1])
    return output

def crawler_second_level(url):
    with urllib.request.urlopen('https://docs.python.org/3.12/library/'+url) as response:
        html = response.read().decode('utf-8')
    match(url):
        case 'ipc.html':
            output = re.findall("<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">.*</span></code>.*</a></li>",html)
            output = [str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each))))[3:len(str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each)))))-9] for each in output]
            return output
        case 'functional.html':
            output = re.findall("<li class=\"toctree-l1\"><a class=\"reference internal\".*<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">.*</span></code>",html)
            output = [str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each))))[3:len(str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each)))))-9] for each in output]
            return output
        case 'development.html':
            output = re.findall("<span class=\"pre\">[^.]+</span></code> — ",html)
            output = [str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each))))[3:len(str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each)))))-9] for each in output]
            return list(set(output))
        case 'unix.html':
            output = re.findall("<span class=\"pre\">[^.]+</span></code> — ",html)
            output = [str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each))))[3:len(str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each)))))-9] for each in output if str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each))))[3:len(str(re.findall(">.+</span>",str(re.findall("<span class=\"pre\">.*</span></code>",each)))))-9] != 'winsound']
            output = list(set(output))
            return output
    
def search(user_type, get_only_lib_name=False):
    urls = crawler_first_level()
    result = []
    details = []
    for url in urls :
        for each in crawler_second_level(url):
            if bool(re.match(f'^{re.escape(user_type)}', each)):
                result.append(each)
                if not get_only_lib_name:
                    details.append(get_detail(each))
    
    if not get_only_lib_name:
        return {result[i]:details[i] for i in range(len(result))}
    else:
        return result

def get_detail(module_name):
    html = None
    path ='https://docs.python.org/3/library/'+module_name+'.html' if module_name != 'lib2to3' else 'https://docs.python.org/3/library/2to3.html'
    with urllib.request.urlopen(path) as response:
        html = response.read().decode('utf-8')
    module_name = module_name if module_name != 'lib2to3' else '2to3'
    action = re.findall(f'<meta property="og:title" content="{module_name} — (.+?)"', html)
    description = re.findall(r'<meta property="og:description" content="(.+?)"', html)
    return {'action':action[0],'description':description[0]}

def get():
    return search('', True)