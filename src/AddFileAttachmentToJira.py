import requests
from requests.auth import HTTPBasicAuth
import json 
import io

url="https://sevval12.atlassian.net/rest/api/3/issue/DEN-11/attachments"
auth=HTTPBasicAuth("sevvalbayramli12@gmail.com","bdchATUVRyatKouMtokD63B8")
#bdchATUVRyatKouMtokD63B8
headers = {
    "Accept": "application/json",
    "X-Atlassian-Token": "no-check"
 }

files = {
         "file": ("myfile.txt", open("myfile.txt","rb"), "application-type")
    }
response = requests.post(
    url,
    headers = headers,
    auth = auth,
    files=files
 )
print(response.text)