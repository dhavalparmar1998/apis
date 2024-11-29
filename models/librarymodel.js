import mongoose from "mongoose";

const Schema = mongoose.Schema;

const libraryschema = new Schema({
    lname: String,
    uid: String
});

const librarymodel = mongoose.model('libraries', libraryschema);
export default librarymodel;