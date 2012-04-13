exports.log = function(statusCode, fileSpec) {
    return ' 192.168.1.1 - - [14/Mar/2012:19:23:47 -0400] "GET ' + 
    '/' +
    ' HTTP/1.1" ' + 
    statusCode + 
    ' 395 "http://scramblelovers.com/" "Mozilla/5.0 (X11; Linux x86_64; rv:11.0) Gecko/20100101 Firefox/11.0"';
};
