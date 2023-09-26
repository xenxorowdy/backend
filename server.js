const express = require('express');

// require('./functions/service/database.service')();
const gameRouter = require("./functions/api.js")
const app = express();


app.use("/game",gameRouter);
// running the app on the port
app.listen(3000);
