const fs = require('fs');

let getEmployeesById = function (req, res) {
    fs.readFile('./employee.json', function (err, data) {
        if (err) {
            console.log(err);
            res.send('Unable to read data');
        }
        const userData = JSON.parse(data);
        for (let i = 0; i < userData.employees.length; i++) {
            if (userData.employees[i].id == req.params.id) {
              res.json(userData.employees[i]);
            return;
            }
        }
    });
  
}

module.exports = getEmployeesById;