import express from "express";
import { addmessage, showmessagebylibraryid } from "../controllers/messagecontroller.js";

const messageroute = express.Router();

messageroute
.get("/",showmessagebylibraryid)
.post("/",addmessage)

export default messageroute;