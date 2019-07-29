import React from 'react';


const CardDisplay = props =>{
  return(
  
   <div>
      {props.cards.map((card)=>{
       
       return(

         <div className="container">
         <img className= "cards_box" src={card.imageUrl} alt="{card.name}"/> 
         </div>
       )
       
       
     }
     )}
    </div>
  )
  
}



export default CardDisplay;