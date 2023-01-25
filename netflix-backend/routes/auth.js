const express = require("express");
const User = require("../models/User");
const router = express.Router();
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
// router.post("/register", (req, res) => {
// 	const newUser = new User({
// 		username: req.body.username,
// 		email: req.body.email,
// 		password: CryptoJs.AES.encrypt(
// 			req.body.password,
// 			process.env.secretKey
// 		).toString(),
// 	})
// 		.save()
// 		.then((data) => {
// 			res.status(200).json({ message: "user registered", data });
// 		})
// 		.catch((error) => {
// 			res.json({ message: "error registering" });
// 		});
// });

router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJs.AES.encrypt(
			req.body.password,
			process.env.secretKey
		).toString(),
	});
	try {
		const user = await newUser.save();
		res.status(201).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		!user && res.status(401).json("wrong username or password");
		const bytes = CryptoJs.AES.decrypt(user.password, process.env.secretKey);
		const originalPassword = bytes.toString(CryptoJs.enc.Utf8);

		if (originalPassword !== req.body.password) {
			res.status(401).json("wrong username or password");
		}
		const accessToken = jwt.sign(
			{ id: user._id, isAdmin: user.isAdmin },
			process.env.secretKey,
			{ expiresIn: "6d" }
		);
		const { password, ...info } = user._doc;

		res.status(200).json({ message: "success", ...info, accessToken });
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
