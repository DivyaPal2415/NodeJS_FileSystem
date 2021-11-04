const fs = require('fs');

let createFileWithContent = function (req, res) {
    console.log(req.body);
    fs.writeFile(`./Files/${req.body.filename}`, JSON.stringify(req.body.content), (err) => {
        if(err) {
            console.log(err);
        }
        console.log('File uploaded successfully');
        res.send({data : "Success"})
    })

}

module.exports = createFileWithContent;