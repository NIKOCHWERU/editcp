import urllib.request
req = urllib.request.Request('https://kvdb.io', method='OPTIONS')
req.add_header('Origin', 'http://localhost')
req.add_header('Access-Control-Request-Method', 'POST')
try:
    with urllib.request.urlopen(req) as response:
        print(response.headers)
except Exception as e:
    print(e)
