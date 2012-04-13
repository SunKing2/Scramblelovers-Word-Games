var http = require('http');
var globals = require('./globals');
var fileReader = require('./filereader');
var log = require('./log');

var SOCKET = globals.getSocket();
var IP = globals.getIp();
var DOCROOT = globals.getDocroot();
var HOME_PAGE = globals.getHomePage();
var START_PAGE_REF = DOCROOT + '/' + HOME_PAGE;

/** Write a header and response with html (web server style).
  * Convenience method which first does a writeHead with status code [200]
  *  then writes out the html the way a web server typically does
  * 
  * @response the response part of request, response to write it to
  * @statusCode http status code: 200: good 401: not found, etc
  * @html the complete html as one big string, complete with tags, line brks
  *   The html in this method gets a newline \n appended to it
*/
function writeHeaderThenHtml(response, statusCode, html) {
  response.writeHead(statusCode, {'Content-Type': 'text/html'});
 
 // don't pass trailing \n, to me, because I write one out here: 
  response.end(html + '\n');
}


http.createServer(function (request, response) {
  try {
    var sHtml = fileReader.readFileAsString(START_PAGE_REF);
    console.log('read fine');
    console.log('len is:' + sHtml.length);
    writeHeaderThenHtml(response, 200, sHtml);
    log.log(200, START_PAGE_REF);
  }
  catch (err) {
    writeHeaderThenHtml(response, 401, 'oopsy, not found');      
    log.log(401, START_PAGE_REF);
  }
}).listen(SOCKET, IP);
console.log('Server running at http://' + IP + ':' + SOCKET + 
    ', serving files from ' + DOCROOT);

// the end

