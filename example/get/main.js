var http = require('../../');

http.get({ path : '/beep' , host: '127.0.0.1', port: 8082}, function (res) {
    var div = document.getElementById('result');
    div.innerHTML += 'GET /beep<br>';
    
    res.on('data', function (buf) {
        div.innerHTML += buf;
    });
    
    res.on('end', function () {
        div.innerHTML += '<br>__END__';
    });
});
