const {Favorite}=require("../DB_connection")
const {User}=require("../DB_connection")

async function getFav(req,res) {
  const {id}=req.query;
    try {
        const user = await User.findByPk(id, {
            include: [Favorite], // Incluir el modelo Favorite en la consulta
          });
          if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
          }
      
          const userFavorites = user.Favorites; // Acceder a la propiedad 'Favorites' para obtener los favoritos del usuario
      
          res.status(200).json(userFavorites);
    } catch (error) {
        res.status(500).json({error:error.message})

    }



}

module.exports={getFav};