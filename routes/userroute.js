import express from "express";
import { adduser, showuser,showUserById,updateUserById,deleteUserById } from "../controllers/usercontroller.js";

const userroute = express.Router();

userroute
.get("/", showuser)
.get("/:useridfromangular", showUserById)
.post("/", adduser)
.put("/:useridfromangular", updateUserById)
.delete("/:useridfromangular", deleteUserById);

export default userroute;