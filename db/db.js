const mongoose=require('mongoose')
function connectDB(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log('Connected to Mongodb');
            resolve();
        })
        .catch((error)=>{
            console.error('Error connecting to MongoDB:',error);
            reject(error);
        });
    });
}



module.exports = {connectDB}