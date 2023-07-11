import SearchBar from "../SearchBarModule/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

export default function Nav({onSearch, setAccess}) {

   const handleLogout = () => {
      setAccess(false);
      window.location.reload();
    };

    return (
       <div className={style.Nav}>
        <SearchBar onSearch={onSearch}>
        </SearchBar>
        <Link to="/about">
        <button >About</button>
        </Link>
        <Link to="/home">
        <button>Home</button>
        </Link>
        <Link to="/favorites">
        <button >Favorites</button>
        </Link>
        <button onClick={handleLogout}>Logout</button>
       </div>
    );
 }
 