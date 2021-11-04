const fs = require('fs');

let getAllEmployees = function (req, res) {
    fs.readFile('./employee.json', function (err, data) {
        if (err) {
            console.log(err);
            res.send('Unable to read data');
        }
        const userData = JSON.parse(data);
        res.json(userData.employees);
    });
  
}

module.exports = getAllEmployees;