const fs = require('fs');

let deleteFile = function (req, res) {
    console.log(req.params);
    fs.unlink(`./Files/${req.params.filename}`, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        console.log('File deleted Successfully');
        res.send({ Data : "OK", status : 200});
    })
}

module.exports = deleteFile;