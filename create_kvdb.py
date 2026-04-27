import urllib.request
req = urllib.request.Request('https://kvdb.io', method='POST')
try:
    with urllib.request.urlopen(req) as response:
        print("BUCKET:", response.read().decode('utf-8'))
except Exception as e:
    print(e)
