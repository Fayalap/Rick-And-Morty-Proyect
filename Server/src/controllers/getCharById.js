const axios = require ("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req,res) {
    const {id}=req.params;
    if(id){
        try {
        const respon= await axios.get(`${URL}${id}`)
        const {name,gender,species,origin,image,status}=respon.data;
        res.status(200).json({id,name,gender,species,origin,image,status})
        } catch (error) {
            res.status(500).json(error.message)
        }

}
else{
    res.status(404).json("No encontrado")}

}


module.exports= {getCharById};