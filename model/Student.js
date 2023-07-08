const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        id_Number:{
            type:Number
        },
        school:{
            type:String,
        },
        standard:{
            type:Number,
            required:true,
        },
        firstName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
		},
		lastName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
		},


       
        }
);

module.exports=mongoose.model("User",userSchema);
