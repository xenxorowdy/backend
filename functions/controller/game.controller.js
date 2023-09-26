const game = require("../model/game.model")
 const getAllGame = async(req,res)=>{
    const Allgames = await game.find({}).lean();
    return res.status(200).json(Allgames)
}

 const getSingleGame = async(req,res)=>{
    const {name} = req.params;
    const game = await game.findOne({name}).lean();
    return res.status(200).json(game)
}

 const CreateSingleGame = async (req,res) =>{
    const body = req.body;
    const response = await game.insertMany(body)
    console.log(response)
    return res.status(201)
}

 const updateSingleGame = async(req,res)=>{
    const body = req.body;
    const update = await game.updateOne({  name: body.name }, body );
    return res.send(202)

}


 const deleteSingleGame = async(req,res)=>{
    const {name} = req.params;
    const deleteRecord = await game.deleteOne({name});
    return res.send(200)
}
module.exports ={
    deleteSingleGame,CreateSingleGame,getSingleGame,getAllGame,updateSingleGame
}