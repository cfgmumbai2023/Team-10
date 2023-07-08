const mongoose=require("mongoose");

const tagSchema=new mongoose.Schema(
    {
        tagName:{
            type:String,
            required:true,
        },
        video:{
            type: mongoose.Schema.Types.ObjectId,
		    required: true,
		    ref: "Video",
        }
        }
);

module.exports=mongoose.model("Tag",tagSchema);
