import express from "express";
import connection from "./database/connection.js";
import userroute from "./routes/userroute.js";
import bodyParser from "body-parser";
import libraryroute from "./routes/libraryroute.js";
import messageroute from "./routes/messageroute.js";
import cors from "cors";


connection().then(res=>{console.log("connected")}).catch(err=>{console.log(err)})

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/users", userroute)
app.use("/library", libraryroute)
app.use("/message", messageroute)
app.listen(process.env.PORT)