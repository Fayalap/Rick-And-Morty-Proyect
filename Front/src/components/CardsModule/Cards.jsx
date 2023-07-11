import Card from '../CardModule/Card';
import style from './Cards.module.css';

export default function Cards({characters, onClose,userID} ) {
   return (<div className={style.Cardss} >
      {characters.map(function({id,name,species,gender,image}){
      return(<Card
         userID={userID}
         id={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         onClose={onClose}
      />)
      })
      }

   </div>);
}
