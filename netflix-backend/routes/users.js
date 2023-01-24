const express = require("express");
const User = require("../models/User");
const router = express.Router();
const CryptoJs = require("crypto-js");
const verify = require("../verifyToken");

//UPDATE
router.put("/:id", verify, async (req, res) => {
	if (req.user.id === req.params.id || req.user.isAdmin) {
		if (req.body.password) {
			req.body.password = CryptoJs.AES.encrypt(
				req.body.password,
				process.env.secretKey
			).toString();
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.sendStatus(403).json("you can update only your account");
	}
});

module.exports = router;
