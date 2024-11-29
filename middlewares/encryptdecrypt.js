import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);

function encryptData(textdata){
    var hash = bcrypt.hashSync(textdata, salt);
    return hash;
}

function checkEncryptData(textdata,hashkey){
    return bcrypt.compareSync(textdata, hashkey);
}

export{
    encryptData,
    checkEncryptData
}