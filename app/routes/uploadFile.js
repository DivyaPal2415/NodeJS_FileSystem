const Busboy = require('busboy');
const path = require('path');
const fs = require('fs');

let uploadFile = function (req, res) {
    let busboy = new Busboy({ headers: req.headers });
      busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
 
    let saveTo = path.join('./Files', '/' + filename);
      file.pipe(fs.createWriteStream(saveTo));
    });
 
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("File Successfully Uploaded!");
    });
 
    return req.pipe(busboy);    
};

module.exports = uploadFile;