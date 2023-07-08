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
            
			
		},
		lastName: {
			
		},


       
        }
);

module.exports=mongoose.model("User",userSchema);
