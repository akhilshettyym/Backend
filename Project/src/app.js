// Install "nodemon, mongoose"

const express = require("express");
const postModal = require("./models/post.model");

const app = express();

app.use(express.json());

module.exports = app;