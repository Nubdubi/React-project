import React from 'react'
import './Left.scss'
import { ReactComponent as Man } from "../../Asset/man.svg";

function Left() {
    return (
        <div className="Left-side">
                      {/* 우측 */}
     
          <div className="mirror">
            {/* 사람 */}
            <div className="bmibox">
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            </div>
            <div className="manbox">
                 <Man width="400" height="600" fill="#F5F5F7" />
            </div>
          </div>
            <div className="itemList">
            
            </div>

        </div>
    )
}

export default Left
