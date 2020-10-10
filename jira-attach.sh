
curl --request POST \
  --url 'https://btich.atlassian.net/rest/api/3/issue/TEST-1/attachments' \
  --user 'obkqz@gurumail.xyz:oapymUtsLGgv03GF2rF0A599' \
  --header 'X-Atlassian-Token: no-check' \
  -F "file=@$1"

