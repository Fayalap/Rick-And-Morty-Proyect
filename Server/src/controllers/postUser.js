const {User}=require("../DB_connection")

 async function postUser(req,res) {
    const {email,password,confirmar}=req.query;
    try {
        if([email,password,confirmar].every(Boolean)){
            if(password!=confirmar){
                res.status(400).json({message:"Las contraseñas no coinciden"})
            }
       const userInstance= await User.findOrCreate({
        where: { email: email ,password:password},
        defaults: {
          email,
          password,
          confirmar
          },
         });

        res.status(200).json({
            access: true,
            id:userInstance[0].dataValues.id
        })
    }else{
        res.status(400).json({message:"Faltan datos"})}
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={postUser};