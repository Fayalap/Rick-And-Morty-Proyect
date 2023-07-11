const {login}=require("../controllers/login.js");
const {getCharById}=require("../controllers/getCharById");
const {postFav}=require("../controllers/postFav.js")
const {deleteFav}=require("../controllers/deleteFav.js")
const {postUser}=require("../controllers/postUser.js")
const {getFav}=require("../controllers/getFav.js")
const router = require("express").Router();

router.get("/login",login);
router.post("/login",postUser);
router.get("/character/:id",getCharById);
router.get("/fav",getFav);
router.post("/fav",postFav);
router.post("/delete",deleteFav)


module.exports=router;