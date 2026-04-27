import urllib.request
import json

url = 'https://api.jsonbin.io/v3/b'
data = json.dumps({'htmlData': ['init']}).encode('utf-8')
req = urllib.request.Request(url, data=data, method='POST')
req.add_header('X-Master-Key', '.UMlkHIcJbeVTcomkPy.AWb1mvvE0Hr9RpIJKVCSy.')
req.add_header('Content-Type', 'application/json')

try:
    with urllib.request.urlopen(req, timeout=10) as response:
        print(response.read().decode('utf-8'))
except Exception as e:
    print(e)
