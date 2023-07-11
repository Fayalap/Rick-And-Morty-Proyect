const {Favorite}=require("../DB_connection")
const {conn}=require("../DB_connection")
const {User}=require("../DB_connection")

async function deleteFav(req,res) {
    const {userID,id}=req.body;  //id=>id de la carta a eliminar
    console.log(req.body)
    try {
        await conn.models.user_favorite.destroy({
            where: {
              userId: userID,
              favoriteId: id
            }
          });
     const favorite=await User.findByPk(userID,{
        include: [Favorite],
      });
  
        res.status(201).json(favorite.Favorites)

    } catch (error) {
        res.status(500).json({error:error.message})

    }
}
module.exports={deleteFav};