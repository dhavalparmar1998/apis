import messagemodel from "../models/messagemodel.js"

const addmessage = async function(req,res){
    try{
          const instance = new messagemodel(req.body);
          const ans = await instance.save()
          res.status(200).send({message:"Message Added Successfully"})
    }
    catch(error){
        console.log(error);
        res.status(401).send({message:"Message Add failed"})
    }
}

const showmessagebylibraryid = async function (req,res){
    var libraryid = req.params.libid;
    try{
        const ans = await messagemodel.find({libid:libraryid});
        res.status(200).send({data:ans})
    }
    catch(error){
        // res.status(401).send({message:"message Add failed"})
        console.log(error);
        
    }
}

export{
    addmessage,
    showmessagebylibraryid
}