const {User, Favorite}=require("../DB_connection")
async function login(req,res) {
    const {email,password}=req.query;
    try {
        if(email.length>0 && password.length>0){
        const instance= await User.findOne({
            where:{email:email},
            include: [Favorite],
        })
        if(instance==null){
           res.status(403).json({ message: "Usuario no encontrado" }) 
        }else{
           if(instance.password==password){
            res.status(200).json({
                access: true,
                id:instance.id
             })
        }else{
            res.status(403).json({ message: "Contraseña incorrecta" })

        }  
        }
    }else{
        res.status(400).json({message:"Faltan datos"})
    }
    } catch (error) {
        res.status(500).json({message:"algo salío mal"})

    }
    
}
module.exports={login};