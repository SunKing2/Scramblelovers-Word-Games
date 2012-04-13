var fs = require('fs');
exports.readFileAsString = function(fileName) {
  var fs = require('fs');
   
  try {
    var data = fs.readFileSync(fileName, 'ascii');
  }
  catch (err) {
    console.error("There was an error opening the file:");
  }
  return data;
};
