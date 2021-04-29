import React,{useState} from 'react'
import '../Public/Header.scss'

function Header() {
    // const [like, setlike] = useState<number>(0)
    // // <number> 숫자 generics 설정
    // const onIncrease = () => setlike(like + 1);
    // let likenum:number = like;
    return (
        <div className="header">
            <div className="logo">
                <svg width="300" height="100" >
                <text 
                    x="50" y="50" fill="#ED6E46" 
                    font-size="30" font-family="'Leckerli One', cursive"
                    rotate="4, 8, -8, -4, -20, -24, 48">
                    Dressroom
                </text>
                </svg>
            </div>
            <div className="headerwrap">
            {/* <div className="likebutoon" onClick={ () => setlike( likenum = (like + 1))}> */}
            {/* {/* <div className="likebutoon" onClick={onIncrease}></div> */}
            {/* <div className="likebutoon" onClick={ () => setlike((like + 1))}> */}
                <div className="likebutton">
                {/* 요렇게 likenum에 할당하면 되는걸까요잉.. */}
           
             <a href="#">
                 <svg width="50" height="50" viewBox="-100 -100 600 5" >
                     <text font-size="300">
                     🧡    
                    </text> 
                 </svg>
             </a>
             </div>
             <div className="searchBar">
             <input type="text"/>
             <button className="search">
                 검색
             </button>
             </div>
             <div className="loginBtn">
                 <button className="login">
                    login
                 </button>
                 <button className="signin">
                    signin
                 </button>

             </div>
             </div>
        </div>
    )
}

export default Header
