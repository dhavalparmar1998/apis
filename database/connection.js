import mongoose from "mongoose";

 async function connection(){
    await mongoose.connect('mongodb+srv://admin:admin@cluster1.3xukv.mongodb.net/sms_portal');
}

export default connection;