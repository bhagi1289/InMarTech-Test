const mongoose = require('mongoose');


module.exports.connectToDB = async(dbURI)=>{
    mongoose.connect(dbURI).then(()=>{
        console.log("Connected to DB...")
    }).catch(err =>{
        throw new Error(err);
    })
    
}