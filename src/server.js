"use strict";

const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/signup");

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(express.urlencoded({ extended: true }));

module.exports = {
    app: app,
    start: (PORT) => {
        app.listen(PORT, () => console.log("app is running"));
    },
};
