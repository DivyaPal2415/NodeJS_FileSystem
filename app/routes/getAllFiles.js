const fs = require('fs');

let getAllFiles = function(req, res) {
    fs.readdir('Files', (err, files) => {
        if(err) {
            console.log(err);
            res.send(err);
        }
        res.send(files);
    })
}

module.exports = getAllFiles;