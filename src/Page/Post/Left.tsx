import React from 'react'
import './Left.scss'
import { ReactComponent as Man } from "../../Asset/man.svg";

function Left() {
    const [height,setheight] = React.useState<number>(10);
    const [weight,setweight] = React.useState([10]);
    const [musle,setmusle] = React.useState([10]);

 
    return (
        <div className="Left-side">
                      {/* 우측 */}
     
          <div className="mirror">
            {/* 사람 */}
            <div className="bmibox">
            <svg width="400" height="100" > 
             <text x="50" y="70" fontSize="50" font-family="'Leckerli One', cursive">
                bmi status 
                </text></svg>
            <span>height:{height}</span><input className="range height" type="range" step="1" max="250" />
            <span>weight:{weight}</span><input className="range weight" type="range" step="1" max="250"/>
            <span>musle:{musle}</span><input className="range musle" type="range" step="10" max="100" />
            </div>
            <div className="manbox">
                 <Man width="400" height="400" fill="#F5F5F7" />
            </div>
          </div>
            <div className="itemList">
            
            </div>

        </div>
    )
}

export default Left
