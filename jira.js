const request = require('request');
let fs = require("fs");
let FILE = 'README.md';
let text = fs.readFileSync(FILE,"utf8");

url = 'https://bitchass.atlassian.net/rest/api/3/issue';

for (let i = 0; i < 30; i++) {
    request.post(
        {
            url: url,
            auth: {
                user: 'obkqz@gurumail.xyz',
                password: 'oapymUtsLGgv03GF2rF0A599'
            },
            json: {
                fields:
                    {
                        "summary": "Summit 2019 is awesome!",
                        "issuetype": {
                            "name": "Bug"
                        },
                        "project": {
                            "key": "TEST",
                        },
                        "description": {
                            "type": "doc",
                            "version": 1,
                            "content": [
                                {
                                    "type": "paragraph",
                                    "content": [
                                        {
                                            "text": text,
                                            "type": "text"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
            }
        }
        , function (err, res, body) {
            if (err) {
                console.log(err);
                return
            }
            console.log(body);
        });
}

