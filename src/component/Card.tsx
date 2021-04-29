import React,{useState,useEffect} from 'react'
import './Card.scss';



function Card({imgUrl, caption}:{imgUrl:string, caption:string}) {
     
    const [like, setlike] = useState<number>(0)
    // <number> 숫자 generics 설정
    const onIncrease = () => setlike(like + 1);
    let likenum:number = like;

    return (
        <>
    <div className="wrapcards">
        <div className="cards">
         <button  className="imga">
         <img src={imgUrl} alt=""/>

         </button>
                    
         </div>
        <span className="captions">{caption}  
         <button className="likebutoon" onClick={ () => setlike( likenum = (like + 1))}>
         {likenum}💖
         </button>  
        </span>

        


        </div>
        </>
        
    )
}

export default Card


