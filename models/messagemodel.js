import mongoose from 'mongoose';



const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const messageschema = new Schema({
  messagetext: String,
  libid: String
 
});

const messagemodel = mongoose.model("messages",messageschema);
export default messagemodel;