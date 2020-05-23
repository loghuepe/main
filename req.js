const request = require('request');
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
url = process.argv[2] + '?' + getRndInteger(1, 2003030);
num_req = process.argv[3];

for (let i = 0; i < num_req; i++) {
    request.get(
        {
            url: url,
        }
        , function (err, res, body) {
            if (err) {
                console.log(err);
                return
            }
            console.log(body);
        });
}

