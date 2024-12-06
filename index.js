import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path';

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// Initialize express app
const app = express();

// Set up dotenv
dotenv.config();

// Set the port and MongoDB URI
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Define the __dirname path
// const __dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serve static frontend files
// app.use(express.static(path.join(__dirname, "./Frontend/dist")));

// Serve the index.html file for any other route
// app.get("*", (req, res) => {
//     res.sendFile(
//         path.join(__dirname, "./Frontend/dist/index.html"), // Corrected path to index.html
//         function (err) {
//             if (err) {
//                 res.status(500).send(err); // Send error if any
//             }
//         }
//     );
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
