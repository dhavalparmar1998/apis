import mongoose from 'mongoose';



const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const userschema = new Schema({
  name: String,
  email: String,
  mobile:Number,
  password: String,
  userstatus:{
    type:Number,
    default:1
  }
 
});

const usermodel = mongoose.model("users",userschema);
export default usermodel;