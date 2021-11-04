const fs = require('fs');

let renameFile = function (req, res) {
    console.log(req.params);
    fs.rename(`./Files/${req.params.oldFilename}`, `./Files/${req.params.newFilename}`, (err) => {
        if(err) {
            console.log(err);
            res.send(err);
        }
        console.log('file renamed')
        res.send('File renamed Successfully');
    });
}

module.exports = renameFile;

// let updateFile = function (req, res) {
//     console.log(req.body);
//     console.log(req.params);
//     let response = {
//         "content" : req.body.content
//     }
//     console.log(response);
//     fs.appendFile(`./Files/${req.params.filename}`, JSON.stringify(response),  (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Content got Added');
//         res.send({ Data : "OK", status : 200});
//     });
    
// }

// module.exports = updateFile;