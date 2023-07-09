const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},

		// Define the password field with type String and required
		password: {
			type: String,
			required: true,
		},
		// Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
		accountType: {
			type: String,
			enum: ["NGO", "Student","Moderator"],
			required: true,
		},
		organizationName:{
			type:String,
		},
        token: {
			type: String,
		},
		image: {
			type: String,
			required: true,
		},
        }
);

module.exports=mongoose.model("User",userSchema);
