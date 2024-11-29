import { encryptData } from "../middlewares/encryptdecrypt.js";
import usermodel from "../models/usermodel.js";

const adduser = async (req, res) => {
    // res.send("hi");
    try {
        // console.log(req.body.password);
        // console.log(encryptData(req.body.password));
        //   const instance = new usermodel(req.body);
        //   const ans = await instance.save();
        //   res.status(200).send({message:"User Added Successfully"})
        var ansFromDatabase = await usermodel.find({ email: req.body.email });
        // console.log(ansFromDatabase);
        if (ansFromDatabase.length > 0) {
            res.status(200).send({ message: "Email Id Exists", status: false })
        }
        else {
            req.body.password = encryptData(req.body.password)
            const instance = new usermodel(req.body);
            const ans = await instance.save();
            res.status(200).send({ message: "User Added Successfully", status: true })
        }
    }
    catch (err) {
        console.log(err);
        res.status(401).send({ message: "User Add failed", status: false })
    }
}

const showuser = async (req, res) => {

    try {
        const ans = await usermodel.find(req.params.useridfromangular);
        res.status(200).send({ data: ans })
    }
    catch (err) {
        res.status(401).send({ message: "User Add failed" })

    }
}

const deleteUserById = async (req, res) => {
    // res.send("hi");
    try {

        const ans = await usermodel.findByIdAndDelete(req.params.useridfromangular);
        // console.log(ansFromDatabase);

        res.status(200).send({ message: "User Deleted", status: true })






    }
    catch (err) {
        console.log(err);
        res.status(401).send({ message: "User Add failed", status: false })
    }
}


const showUserById = async (req, res) => {

    try {
        const ans = await usermodel.findById(req.params.useridfromangular);
        res.status(200).send({ data: ans })
    }
    catch (err) {
        res.status(401).send({ message: "User show failed" })

    }
}

const updateUserById = async (req, res) => {
    // res.send("hi");
    try {

        const ans = await usermodel.findByIdAndUpdate(req.params.useridfromangular, req.body);
        // console.log(ansFromDatabase);

        res.status(200).send({ message: "User Updated", status: true })






    }
    catch (err) {
        console.log(err);
        res.status(401).send({ message: "User Add failed", status: false })
    }
}



export {
    adduser,
    showuser,
    showUserById,
    updateUserById,
    deleteUserById
}