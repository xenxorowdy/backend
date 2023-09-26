const express = require('express');
const { getAllGame, getSingleGame, CreateSingleGame, updateSingleGame } = require('./controller/game.controller');
const app = express();
const router = express.Router();
const serverless = require("serverless-http");

router.get('',(req,res)=>{
    res.send("server online")
})
router.get('/allgame',getAllGame);
router.get('/getsingle/:name',getSingleGame);
router.post('/create',CreateSingleGame);
router.put('/update',updateSingleGame)


module.exports = router;
module.exports.handler = serverless(app);