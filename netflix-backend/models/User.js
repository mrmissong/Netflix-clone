const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		profilePicture: { type: String, default: "" },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);
const User = mongoose.model("Users", UserSchema);
module.exports = User;
