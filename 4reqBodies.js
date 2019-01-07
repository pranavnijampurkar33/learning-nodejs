const http = require('http');
const modules = require('./4module');
console.log(modules.someText);
console.log(modules.anotherText);
console.log(modules.oneMore);   ///????
var app = http.createServer(modules.handler);
app.listen(4000);