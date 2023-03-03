const mongoose=require('mongoose')

const connectDB=()=>{
    return mongoose.connect('mongodb://localhost:27017/BlogWebsite')
    .then(()=>{
        console.log('connection successfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB