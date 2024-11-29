import librarymodel from "../models/librarymodel.js"

const addlibrary = async function(req,res){
    try{
          const instance = new librarymodel(req.body);
          const ans = await instance.save()
          res.status(200).send({message:"Library Added Successfully"})
    }
    catch(error){
        console.log(error);
        res.status(401).send({message:"Library Add failed"})
    }
}

const showlibrarybyuserid = async function (req,res){
    var userid = req.params.uid;
    try{
        const ans = await librarymodel.find({uid:userid});
        res.status(200).send({data:ans})
    }
    catch(error){
        res.status(401).send({message:"Library Add failed"})
        
    }
}

export{
    addlibrary,
    showlibrarybyuserid
}