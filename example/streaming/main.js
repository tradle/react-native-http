var http = require('../../');

http.get({path: '/doom', host: '127.0.0.1', port: 8082}, function (res) {
    var div = document.getElementById('result');
    if (!div.style) div.style = {};
    div.style.color = 'rgb(80,80,80)';

    res.on('data', function (buf) {
        div.innerHTML += buf;
    });

    res.on('end', function () {
        div.style.color = 'black';
        div.innerHTML += '!';
    });
});
