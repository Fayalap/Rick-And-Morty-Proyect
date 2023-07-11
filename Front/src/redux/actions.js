import axios from "axios";
export const ADD_FAV="ADD_FAV";
export const REMOVE_FAV="REMOVE_FAV";
export const FILTER="FILTER";
export const ORDER="ORDER";
export const GET_FAV="GET_FAV";
const endpointFav = 'http://localhost:3001/rickandmorty/fav';
const endpoint = 'http://localhost:3001/rickandmorty/delete';



export const getFav = (idUser)=>{
   console.log(idUser)
   const id=idUser.idUser;
   return (dispatch) => {
      axios.get(endpointFav+`?id=${id}`).then(({ data }) => {
         return dispatch({
            type: GET_FAV,
            payload: data,
            idUser:id
         });
      });
   };
};
export const addFav = (character) => {
    return (dispatch) => {
       axios.post(endpointFav, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };
export function orderCards(orden){
    switch (orden){
        case "A":
         return {
            type:ORDER,
            payload:orden
         }
        case "B":
         return {
            type:ORDER,
            payload:orden
         }
    }
    
}

export const filterCards=(gender)=>{
        return{type:FILTER,payload:gender};
}

export const removeFav = (character) => {
    return (dispatch) => {
       axios.post(endpoint,character).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

