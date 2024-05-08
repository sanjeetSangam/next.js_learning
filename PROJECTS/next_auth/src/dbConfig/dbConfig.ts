import mongoose from "mongoose";

export async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGO_URL!);
		const connection = mongoose.connection;
		connection.on("connection", () => {
			console.log("mongodb connection established");
		});

		connection.on("error", (err) => {
			console.log("mongodb connection error", err);
			process.exit(1);
		});
	} catch (error) {
		console.log("something went wrong in connectDB");
		console.log(error);
	}
}
