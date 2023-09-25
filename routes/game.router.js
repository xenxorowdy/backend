const express = require('express');
const { getAllGame, getSingleGame, CreateSingleGame, updateSingleGame } = require('../controller/game.controller');
const router = express.Router();

router.get('/allgame',getAllGame);
router.get('/getsingle/:name',getSingleGame);
router.post('/create',CreateSingleGame);
router.put('/update',updateSingleGame)


module.exports = router;