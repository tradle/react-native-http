var http = require('../../');

var n = 100;
var opts = { path : '/plusone', method : 'post', host: '127.0.0.1', port: 8082};

var req = http.request(opts, function (res) {
    var div = document.getElementById('result');
    div.innerHTML += n.toString() + ' + 1 = ';
    
    res.on('data', function (buf) {
        div.innerHTML += buf;
    });
});

req.write(n);
req.end();
