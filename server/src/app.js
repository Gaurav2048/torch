const express = require("express");
const cors = require("cors");
const errorHandler = require("./utils/errorHandler");
const routerV1 = require("./routes");
const http = require('http')
const { Server } = require('socket.io')
const path = require('path')

const app = express();
app.use(express.json());

// app.use(cors());

app.use("/v1", routerV1);

app.use(errorHandler);

const buildPath = path.join(__dirname, '../dist');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

console.log("IO is", io.to)
const sendEvent = (group, type, data) => {
    // io.to(group).emit(type, data);
}



module.exports = { app, server, io, sendEvent };
