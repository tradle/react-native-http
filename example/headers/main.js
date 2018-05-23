var http = require('../../');

http.get({ path : '/beep' , host: '127.0.0.1', port: 8082, method: 'GET'}, function (res) {
var req = http.request(opts, function (res) {
    var div = document.getElementById('result');
    
    for (var key in res.headers) {
        div.innerHTML += key + ': ' + res.getHeader(key) + '<br>';
    }
    div.innerHTML += '<br>';
    
    res.on('data', function (buf) {
        div.innerHTML += buf;
    });
});

req.setHeader('bling', 'blong');
req.end();
