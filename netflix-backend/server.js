if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const dbURI = process.env.dbURI;

const app = express();

mongoose.set("strictQuery", true);
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("DB connected");
	});
app.listen(8800, () => {
	console.log("running on port 8800");
});
