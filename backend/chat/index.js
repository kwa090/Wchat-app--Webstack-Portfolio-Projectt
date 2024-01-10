const http = require("http");
const server = http.createServer(app);


const socketIO = require("socket.io");
const io = socketIO(server);

module.exports = io