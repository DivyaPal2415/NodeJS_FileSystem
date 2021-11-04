const fs = require('fs');

let insertEmployees = function (req, res) {
    response = {
        "id": req.body.id,
        "name": req.body.name,
        "designation": req.body.designation,
        "address": {
            "city": req.body.address.city,
            "country": req.body.address.country,
            "zipcode": req.body.address.zipcode
        },
        "projectId": req.body.projectId
    }
    console.log(response);
    res.send(JSON.stringify(response));

    fs.appendFile('./employee.json', JSON.stringify(response), err => {
        if (err) {
            console.log(err);
        }
        console.log('new employee got added');
    })
};

module.exports = insertEmployees;