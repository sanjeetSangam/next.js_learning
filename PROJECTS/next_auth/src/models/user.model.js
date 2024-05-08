import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: [true, "Please provide a username"],
			unique: true,
		},
		email: {
			type: String,
			required: [true, "Please provide an email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please provide password"],
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: String,
		forgotPasswordTokenExpiry: String,
		verifyToken: String,
		verifyTokenExpiry: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const User = mongoose.models.users || mongoose.model("users", userSchema);
