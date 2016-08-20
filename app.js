var http = require('http');
var url = require('url');
var fs = require("fs");


var myhttp = http.createServer(function (request,response) {
    var queryString = url.parse(request.url,true).query;
    console.log('hello '+ queryString.name);


    response.writeHead(200);
    fs.readFile('./index.html',null,function(error,data){
        if (error){
            response.writeHead(404);
            response.write('File not found');
        } else{

            response.write(data);
            response.write('hello '+ queryString.name);
        }
        response.end();
    });
});
myhttp.listen(8888);

console.log('we listen to http://localhost:8888?id=1&name=Obadh');