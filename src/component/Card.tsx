import React from 'react'
import './Card.scss';



function Card({imgUrl, caption}:{imgUrl:string, caption:string}) {
 
    return (
        <div className="cards">
         <button className="img">
          <img src={imgUrl} alt=""/>
          <span className="caption">{caption}</span>      
         </button>
          
        </div>
        
    )
}

export default Card


