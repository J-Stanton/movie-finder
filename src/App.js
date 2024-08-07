import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=45e71256';


const App=() =>{

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
    }
    useEffect(()=>{
        searchMovies('Avatar');
    },[])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Avatar"
                    onChange={()=>{}}

                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{}}
                />
            </div>
        </div>
    );
}

export default App;