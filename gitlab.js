const request = require('request');
let fs = require("fs");

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


let FILE = 'jira.js';
//let text = fs.readFileSync(FILE, "utf8");
let text = makeid(1000);
let str = encodeURIComponent(text);
url = 'https://gitlab.com/api/v4/projects/18925901/issues?title=HELLOWORLD&description=' + str;
url = 'https://gitlab.com/api/v4/projects';


for (let i = 0; i < 5000; i++) {
    request.get(
        {
            url: url,
            //headers: {
              //  "Private-Token": "7sckh7gUqGJQ9x-Gz_JH"
            //}
        }
        , function (err, res, body) {
            if (err) {
                console.log(err);
                return
            }
            console.log(body);
        });
}
