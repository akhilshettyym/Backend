const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb uri/project");
    console.log("Connected to DB");
}

module.exports = connectDB;