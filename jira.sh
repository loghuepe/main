
while true
do

curl --request POST \
  --url 'https://bitchass.atlassian.net/rest/api/3/issue' \
  --user 'obkqz@gurumail.xyz:oapymUtsLGgv03GF2rF0A599' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{ "fields": {
        "summary": "Summit 2019 is awesome!",
        "issuetype": {
            "name": "Bug"
        },
        "project": {
            "key": "TEST"
        },
        "description": {
            "type": "doc",
            "version": 1,
            "content": [
                {
                "type": "paragraph",
                "content": [
                    {
                    "text": "This is the description.",
                    "type": "text"
                    }
                ]
                }
            ]
        }
    }}'
done
