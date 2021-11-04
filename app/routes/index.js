'use strict';

const fs = require('fs');

let files = fs.readdirSync('./app/routes');
let file, route;

let routes = {};

for (let i = 0; i < files.length; i++) {
  file = files[i];
  if (file !== 'index.js') {
    route = file.replace(/\..*$/, ''); // remove extension
    routes[route] = require('./' + file);
  }
}

module.exports = routes;