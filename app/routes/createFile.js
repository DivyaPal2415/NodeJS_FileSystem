const fs = require('fs');

let createFile = function (req, res) {
    console.log(req.params);
    fs.open(`./Files/${req.params.filename}`, 'w', (err , file) => {
        if(err) {
            console.log(err);
        }
        console.log('File created successfully');
        res.send({data : "Success"})
    })

}

module.exports = createFile;