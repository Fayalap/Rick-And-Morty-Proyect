import { useSelector ,useDispatch } from "react-redux"
import Card from "../CardModule/Card"
import style from "./Favorite.module.css"
import { orderCards , filterCards 
 } from "../../redux/actions";
import { useState } from "react";


export default function Favorites(){
const[aux,setAux]=useState(false);
const favorites=useSelector((state)=>state.myFavorites);
const userID=useSelector((state)=>state.idUser)
const dispatch = useDispatch();
const handleOrder=(e)=>{
  dispatch(orderCards(e.target.value))
  setAux(!aux)
}
const handleFilter=(e)=>{
  dispatch(filterCards(e.target.value))

}

    return (
        
        <div className={style.Favorites}>
          <div>
          <select onChange={handleOrder}>
          <option value="A">ascendente</option>
          <option value="B">descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        </div>
        <section>
        {favorites.map(({id,name,species,gender,image,onClose})=>{
    return(
      
    <Card 
      userID={userID}
      key={id}
      id={id}
      name={name}
      species={species}
      gender={gender}
      image={image}
      onClose={onClose}
      />
    );
})}
      </section>
        </div>
);

};
