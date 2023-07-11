require('dotenv').config();
const Sequelize  = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel=require("./models/User.js")
const FavoriteModel=require("./models/Favorite.js")


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
 { logging: false, native: false });

//función de los modelos.
UserModel(sequelize);
FavoriteModel(sequelize);

//Relacion de Modelos
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'user_favorite', foreignKey: 'userId' });
Favorite.belongsToMany(User, { through: 'user_favorite', foreignKey: 'favoriteId' });

module.exports = {
   User,
   Favorite,
   conn:sequelize,
};
