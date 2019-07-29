import React from 'react';
import './SearchBar.css';
import {useRef} from 'react';
import React, { useState } from 'react';
import CardDisplay from '../CardDisplay/CardDisplay';



 
function SearchBar(){

 
    const inputRef = useRef(null);
    const [cards, setCards] = useState([]);


  
return(
  <div className="main">
     <p className="container">Enter the Pokémon name</p>
     <input type="text" placeholder="Which pokemon?" className="input" ref={inputRef}/>
     <button 
     type="button" 
     className="submit"
     onClick={
     () => fetch(`https://api.pokemontcg.io/v1/cards?name=${inputRef.current.value}&pageSize=8` )
     .then(function(response) {
       return response.json();
     })
     .then(function(myjson) {
     setCards(myjson.cards);
     console.log(cards)


     })
     }
     >Let's GO!</button>
   

    <CardDisplay cards={cards}/>
    
    


  </div>
 



)
}



export default SearchBar;

 

                   