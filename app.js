const http = require('http');
const url = require('url');
const express = require('express');
const app = express();

const ejs = require('ejs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// register view engine (web template system)
app.set('view engine', 'ejs');

const myFunctions = require('./myFunctions');
myFunctions.sayHello();
myFunctions.sayBye();

server.listen(port, hostname);
