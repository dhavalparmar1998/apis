import mongoose from 'mongoose';



const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const groupschema = new Schema({
  gname: String,
  gid: String
 
});

const groupmodel = mongoose.model("groups",groupschema);
export default groupmodel;