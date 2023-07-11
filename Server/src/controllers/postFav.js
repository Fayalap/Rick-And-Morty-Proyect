const {Favorite}=require("../DB_connection")
const {User}=require("../DB_connection")
const {conn}=require("../DB_connection")
async function postFav(req,res) {
    const {userID,id,name,image,species,gender}=req.body;
    try {
        if([id,name,image,species,gender].every(Boolean)){
        await Favorite.findOrCreate({
        where: { id: id },
        defaults: {
            id, name,image,species,gender
        },

      });
       await conn.models.user_favorite.create({
                userId:userID,
                favoriteId:id
             })
     const favorite=await User.findByPk(userID,{
        include: [Favorite],
      });
      
        res.status(201).json(favorite.Favorites)

    }else{
        res.status(400).json("Faltan datos")
    }
    } catch (error) {
        res.status(500).json({error:error.message})

    }

    
}

module.exports={postFav};