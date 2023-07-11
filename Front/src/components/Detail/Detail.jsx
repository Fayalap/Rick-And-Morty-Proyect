import style from "./Detail.module.css";
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function Detail(){
    const {id} = useParams();
    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return (
        <div className={style.Detail}>
            <div>
                <h1>{character.name}</h1>
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
                <img src={character.image}></img>

            </div>
        </div>
    );


}
