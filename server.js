const http = require('http');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');


const getAllEmployees = require('./app/routes/getAllEmployees');
const getEmployeesById = require('./app/routes/getEmployeesById');
const insertEmployees = require('./app/routes/insertEmployees');
const getAllFiles = require('./app/routes/getAllFiles');
const deleteFile = require('./app/routes/deleteFile');
const renameFile = require('./app/routes/renameFile');
const createFile = require('./app/routes/createFile');
const createFileWithContent = require('./app/routes/createFileWithContent');
const uploadFile = require('./app/routes/uploadFile');

let app = express();
let PORT = 3000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
})
 

// Display all the employee information
app.get('/employees', getAllEmployees);
// Display employee information associated with a specific id.
app.get('/employees/:id', getEmployeesById); 
// Insert new Employee
app.post('/employees', insertEmployees);



// get all Files
app.get('/files', getAllFiles); 
// add a new file
app.post('/files/:filename', createFile);
app.post('/files', createFileWithContent);
// Delete a file
app.delete('/files/:filename', deleteFile); 
// rename a File
app.put('/files/:oldFilename/:newFilename', renameFile); 
// Upload File
app.post('/fileupload', uploadFile);



app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT}`);
});



