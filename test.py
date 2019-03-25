import requests

r = requests.get('http://localhost:5555/rest/JDBC_Tutorial/test_retrieve',
                 headers={'Authorization': 'Basic QWRtaW5pc3RyYXRvcjptYW5hZ2U='})
print(r.content)
