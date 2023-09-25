const express = require('express');
var bodyParser = require('body-parser')

require('./service/database.service')();
const gameRouter = require("./routes/game.router.js")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended : true, limit : '50mb' }));
app.use("/game",gameRouter);
// running the app on the port
app.listen(3000);
