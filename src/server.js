const express = require('express');
const server = express();
const port = 8080;

server.use(express.static(__dirname));
server.listen(port);
console.log(`Express is listening at http://localhost:${port}`);