const express = require("express");
const server = express();
const PORT = 3001;
const router =require("./routes/index")
const morgan=require("morgan")
const { conn } = require('./DB_connection');

server.use(express.json())  //Middlewares
server.use(morgan("dev"))


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use("/rickandmorty",router)

//Funcion principal
async function main() {
  try { 
   await conn.sync({ force: false })
   console.log('Connection has been established successfully.');
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }
}

main();  
  
 
