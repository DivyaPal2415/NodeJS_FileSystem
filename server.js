const http = require('http');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const routes = require('./app/routes');

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
app.get('/employees', routes.getAllEmployees);
// Display employee information associated with a specific id.
app.get('/employees/:id', routes.getEmployeesById); 
// Insert new Employee
app.post('/employees', routes.insertEmployees);

// get all Files
app.get('/files', routes.getAllFiles); 
// add a new file
app.post('/files/:filename', routes.createFile);
app.post('/files', routes.createFileWithContent);
// Delete a file
app.delete('/files/:filename', routes.deleteFile); 
// rename a File
app.put('/files/:oldFilename/:newFilename', routes.renameFile); 
// Upload File
app.post('/fileupload', routes.uploadFile);

app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT}`);
});



