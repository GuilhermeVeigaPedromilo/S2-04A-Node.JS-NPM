var http = require('http');
var md = require('./module');
//var env = require('./index.env');


http.createServer( function (req,res ){
    
res.writeHead(200, {'Content-TYpe': 'text/html'});
//codigo entrara em funcionamento somente se tiver um sgbd instalado
//require("dontenv").config();

//window.alert("Abra o console para verificar a mensagem");

//const variavelDbHost=process.env.DB_HOST;

//console.log("Olá, usuário de computador", variavelDbHost);

res.write("<br>"+md.myDAteTime());

res.end();
}).listen(5019);
