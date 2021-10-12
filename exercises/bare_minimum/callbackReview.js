/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
const readline = require('readline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // const rs = fs.createReadStream(filePath, {encoding: 'utf8'});
  // let line = '';
  // let pos = 0;
  // rs.on('data', (chunk) => {
  //   line += chunk;
  //   if (line.indexOf('\n') === -1) {
  //     pos += chunk.length;
  //   } else {
  //     rs.close();
  //   }
  // })
  //   .on('close', () => {
  //     callback(null, line.slice(0, pos + line.indexOf('\n')));
  //   })
  //   .on('error', (err) => {
  //     callback(err);
  //   });

  fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    let index = data.indexOf('\n');
    let line = data.slice(0, index);
    callback(null, line);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (err, res) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, res.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
