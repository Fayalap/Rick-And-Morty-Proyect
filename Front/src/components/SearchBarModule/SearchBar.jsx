import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   
   const [id,setId]=useState("");

   function handleChange(event){
      setId(event.target.value);
   }

   return (
      <div className={style.SearchModule} >
          <input type='search' onChange={handleChange} />
          <button onClick={()=>(onSearch(id))}>Agregar</button> 
      </div>
   );
}
