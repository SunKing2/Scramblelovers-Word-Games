require ('fs');
exports.getSocket = function() {
    return 8080;
};
exports.getIp = function() {
    return '127.0.0.1';
};
// usually a  directory name, no trailing slash
exports.getDocroot = function() {
    return '../www';
};
exports.getHomePage = function() {
    return 'index.html';
};
