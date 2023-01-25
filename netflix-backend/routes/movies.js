const express = require("express");
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

const router = express.Router();

//CREATE A NEW MOVIE

router.post("/", verify, (req, res) => {
	if (req.user.isAdmin) {
		const newMovie = new Movie(req.body)
			.save()
			.then((data) => {
				res.status(201).json({ message: "success", data });
			})
			.catch((error) => {
				res.status(500).json(error);
			});
	} else {
		res.status(403).json("You are not allowed");
	}
});

//UPDATE A MOVIE

router.put("/:id", verify, (req, res) => {
	if (req.user.isAdmin) {
		Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
			.then((data) => {
				res.status(200).json({ message: "Movie updated", data });
			})
			.catch((error) => {
				res.status(500).json(error);
			});
	} else {
		res.status(403).json("You are not allowed");
	}
});

//DELETE A MOVIE

router.delete("/:id", verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await Movie.findByIdAndDelete(req.params.id);
			res.status(200).json("The movie has been deleted...");
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
});

//GET

router.get("/find/:id", verify, async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		res.status(200).json(movie);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET RANDOM

router.get("/random", verify, async (req, res) => {
	const type = req.query.type;
	let movie;
	try {
		if (type === "series") {
			movie = await Movie.aggregate([
				{ $match: { isSeries: true } },
				{ $sample: { size: 1 } },
			]);
		} else {
			movie = await Movie.aggregate([
				{ $match: { isSeries: false } },
				{ $sample: { size: 1 } },
			]);
		}
		res.status(200).json(movie);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ALL

router.get("/", verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const movies = await Movie.find();
			res.status(200).json(movies.reverse());
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
});

module.exports = router;
