from crawling import crawler_first_level,crawler_second_level
import re
def search(user_type):
    urls = crawler_first_level()
    result = []
    for url in urls :
        for each in crawler_second_level(url):
            if bool(re.match(f'^{re.escape(user_type)}', each)): 
                result.append(each)
    return result
def main():
    while True :
        prompt = input("Search for : ")
        if prompt == 'q':
            break
        print(search(prompt))
if __name__ == "__main__":
    main()