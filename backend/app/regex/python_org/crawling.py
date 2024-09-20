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