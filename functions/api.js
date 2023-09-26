const express = require('express');
const { getAllGame, getSingleGame, CreateSingleGame, updateSingleGame, deleteSingleGame } = require('./controller/game.controller');
const app = express();
const router = express.Router();
const cors = require('cors');
var bodyParser = require('body-parser')
const serverless = require("serverless-http");
require('./service/database.service')();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended : true, limit : '50mb' }));
    

router.get('',(req,res)=>{
    res.send("server online")
})
app.use(cors({origin: '*'}))
router.get('/allgame',getAllGame);
router.get('/getsingle/:name',getSingleGame);
router.post('/create',CreateSingleGame);
router.put('/update',updateSingleGame)
router.delete('/delete/:name',deleteSingleGame)
app.use(`/.netlify/functions/api`, router);

module.exports = router;
module.exports.handler = serverless(app);