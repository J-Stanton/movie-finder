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
        <h1>App</h1>
    );
}

export default App;