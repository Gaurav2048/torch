import express from "express";
import cors from "cors";
import errorHandler from "./utils/errorHandler.js";
import routerV1 from "./routes/index.js";
import http from 'http'
import { Server } from 'socket.io'
import path from 'path'
import { fileURLToPath } from 'url';


const app = express();
app.use(express.json());

app.use(cors());

app.use("/v1", routerV1);

app.use(errorHandler);

const __filename = fileURLToPath(import.meta.url); // Get the current file's URL
const __dirname = path.dirname(__filename);         

const buildPath = path.join(__dirname, '../dist');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// const server = http.createServer(app)
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST']
//     }
// })

// console.log("IO is", io.to)
// const sendEvent = (group, type, data) => {
//     // io.to(group).emit(type, data);
// }



export { app };
