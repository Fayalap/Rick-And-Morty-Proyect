import { ADD_FAV ,REMOVE_FAV ,FILTER, ORDER ,GET_FAV} from "./actions";

let initialState={
    myFavorites:[],
    allCharacters:[],
    idUser:0,
};

const rootReducer= (state=initialState, actions)=>{

    switch(actions.type){
        case GET_FAV:
            return { ...state, myFavorites: actions.payload, allCharacters: actions.payload ,idUser:actions.idUser};
            
        case ADD_FAV:            
              return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };

        case FILTER:
                if(actions.payload==="all"){
                return {...state,myFavorites:state.allCharacters};
                }else{
            return {...state,myFavorites:state.allCharacters.filter((obj)=>obj.gender===actions.payload)};
        }
        case ORDER:
            const allCard=[...state.myFavorites];
            return{
                ...state,
                myFavorites:
                actions.payload==="A"?
                allCard.sort((a,b)=>a.id - b.id)
                :allCard.sort((a,b)=>b.id - a.id)

            }
        
        default:
            return {...state};    
    };
}

export default rootReducer;