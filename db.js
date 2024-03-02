const mongoose=require('mongoose'); 
const mongoURL='mongodb://localhost:27017/blog';

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("DataBase is connected");
});
db.on('error',(err)=>{
    console.log("Error is found",err);
});
db.on('disconnected',()=>{
    console.log("DataBase is disconnected");
});

module.exports=db;

