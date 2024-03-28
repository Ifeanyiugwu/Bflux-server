require("dotenv").config();
const express = require("express");
const { config } = require("./config");
const app = express()
const cors = require("cors");
const { errorHandler } = require("./middlewares/error.middleware");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/api/v1/status", (req, res) =>{
    // console.log(req)
res.send(`Yes! Welcome to ${config.APPNAME}API`);
})

app.use(errorHandler)
module.exports = app;
