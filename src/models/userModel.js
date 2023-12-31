import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please provide a username"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
	},
	isVerfied: {
		type: Boolean,
		default: false,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	forgotPasswordToken: String,
	forgotPasswordTokenExpiry: Date,
	verifiedToken: String,
	verifyTokenExpiry: String,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
