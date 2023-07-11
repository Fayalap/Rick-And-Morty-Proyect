import './App.css';
import { Fragment } from 'react';
import { useState,useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getFav } from "./redux/actions"
import Cards from './components/CardsModule/Cards.jsx';
import Nav from './components/NavModule/Nav';
import axios from 'axios';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from "./components/Favorite/Favorite.jsx";

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {

   const {pathname} = useLocation()
   const [characters,setCharacters]=useState([]);
   const [access,setAccess]=useState(false);
   const [userID,setUserID]=useState();
   const dispatch=useDispatch();

   const handleButtonClick = (idUser) => {
      dispatch(getFav({idUser}));
    };

   const navigate = useNavigate();
   useEffect(() => {
      if(!access)navigate('/')
   }, [access]);

   //inicio de sesion y registro de usuario
   async function login(userData) {
      const { correo, contraseña , confirmar} = userData;
      try {
         if(confirmar.length==0){
            const {data} = await axios.get(URL + `?email=${correo}&password=${contraseña}`)
            const { access ,id} = data;
            setAccess(access);
            if(access)alert("Se inicio sesion correctamente")
            handleButtonClick(id); 
            setUserID(id)
            access && navigate('/home');
            return;
         }
        if(contraseña.length!=0){
            const {data} = await axios.post(URL + `?email=${correo}&password=${contraseña}&confirmar=${confirmar}`)
            const { access ,id} = data;
            setAccess(access);
            if(access)alert("Se inicio sesion correctamente")
            handleButtonClick(id);
            setUserID(id)
            access && navigate('/home');
            return;
         }
      }catch (error) {
         alert(error.response.data.message)
      }
   }
 
//Busca las carta desde la api y verifica que no este agregada con anterioridad
  async function onSearch(id) {
      if(characters.some(obj=>obj.id == id )){
         window.alert('Ya esta agregado.');
      }else{
         try{
            const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
          }catch(error){
            alert(error.response.data.message)
          }
      }
   }
   //Elimina la carta cerrada y las actualiza filtrando
   function onClose(id){
      setCharacters(characters.filter(obj => {return obj.id != parseInt(id)}));
   }

   return (
      <Fragment>
      <div className='App'>
      <div className="Container"> {pathname=="/" && <Form login={login}></Form>}</div>  
      <Routes>
         <Route path="/home" element={
          <>
            <Nav onSearch={(id) => onSearch(id)} 
            setAccess={setAccess}/>
            <Cards onClose={(id) => onClose(id)} characters={characters} userID={userID}
           />
          </>
        }
      />
      <Route path='/favorites' element={<><Nav onSearch={(id) => onSearch(id)} setAccess={setAccess}/><Favorites/></>}/>
      <Route path='/about' element={<About></About>} />
      <Route path='/detail/:id' element={<Detail></Detail>}/>
      </Routes>
      </div>
      </Fragment>
   );
}

export default App;
