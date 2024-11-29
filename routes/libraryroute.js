import express from "express";
import { addlibrary, showlibrarybyuserid } from "../controllers/librarycontroller.js";
// import { adduser, showuser } from "../controllers/librarycontroller.js";


const libraryroute = express.Router();

libraryroute
.get("/:uid",showlibrarybyuserid)
.post("/",addlibrary)

export default libraryroute;