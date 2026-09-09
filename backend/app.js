const express = require("express")
const { connectDB } = require("./config/db")
require("dotenv").config()

//imports models
const User = require("./models/User")
const Item = require("./models/Item")

const app = express();
app.use(express.json());

//api routes

const startServer = async () => {
    await connectDB();

    app.listen(process.env.PORT, () => {
        console.log(`Succesfully running on port: ${process.env.PORT}`)
    })
};

startServer();