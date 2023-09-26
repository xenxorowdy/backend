const game = require("../model/game.model")
 const getAllGame = async(req,res)=>{
    try {
        
        const Allgames = await game.find({}).lean();
        return res.status(200).json(Allgames)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

 const getSingleGame = async(req,res)=>{
    const {name} = req.params;
    const result = await game.findOne({Name:name}).lean();
    return res.status(200).json(result)
}

 const CreateSingleGame = async (req,res) =>{
    const body = req.body;
    const response = await game.insertMany(body)
    console.log(response)
    return res.sendStatus(201)
}

 const updateSingleGame = async(req,res)=>{
    const body = req.body;
    const update = await game.updateOne({  Name: body.Name }, body );
    return res.sendStatus(202)

}


 const deleteSingleGame = async(req,res)=>{
    const {name} = req.params;
    const deleteRecord = await game.deleteOne({Name:name});
    return res.sendStatus(200)
}
module.exports ={
    deleteSingleGame,CreateSingleGame,getSingleGame,getAllGame,updateSingleGame
}