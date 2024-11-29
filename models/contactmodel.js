import mongoose from 'mongoose';



const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const contactschema = new Schema({
 name: String,
 email: String,
 mobile: Number,
 gid: String
 
});

const contactmodel = mongoose.model("contacts",contactschema);
export default contactmodel;