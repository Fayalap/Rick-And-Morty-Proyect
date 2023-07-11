import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState,useEffect} from 'react';

 function Card({id,name,species,gender,image,onClose, addFav,removeFav,myFavorites,userID}) {
   const [isFav,setIsFav]=useState(false);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id == id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   

   const handleFavorite=()=>{

      if(isFav){
         setIsFav(false);
         console.log(userID)
        removeFav({userID,id,name,species,gender,image,onClose, addFav,removeFav});
      }
      else{
         setIsFav(true)
         addFav({userID,id,name,species,gender,image,onClose, addFav,removeFav})
      }
   
   }

   return (
      
      <div className={style.Card} >
      
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => { onClose(id); handleFavorite(); }}>X</button>
         <Link to={`/detail/${id}`}>
       <h2>{name}</h2>
         </Link>
         
         <h2>{species} </h2>
         <h2>{gender} </h2>
         <img src={image} alt='' /> 
      
      </div>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
   addFav:(characters)=>{
      dispatch(addFav(characters));
      },
   removeFav:(characters)=>{
      dispatch(removeFav(characters));
      
      },
      }
   }
   const mapStateToProps=(state)=>{
      return {
         myFavorites: state.myFavorites,
      };
   }
export default connect(mapStateToProps,mapDispatchToProps) (Card);