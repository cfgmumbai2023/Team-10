const mongoose=require("mongoose");

require("dotenv").config;
const dbConnect=()=>{
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Succesfull")
})
.catch((error)=>{
    console.log("error")
    process.exit();
})
}

module.exports=dbConnect;