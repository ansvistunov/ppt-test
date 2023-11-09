const http = require('http');

http.get('http://www.itmm.unn.ru/', function(response) {
    // Continuously update stream with data
    //console.log('1');
    let body = '';
    response.on('data', function(d) {
        body += d;
        //console.log('2');
    });
    response.on('end', function() {
        //console.log('3');
        console.log(body);
    });
});
