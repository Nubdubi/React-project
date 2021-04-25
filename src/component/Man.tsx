import React from 'react'
import './Man.scss'

function Man({imgUrl, caption}:{imgUrl:string, caption:string}) {
     

    return (
        <div className="mans">
                <div className="headmans">
                 
                  <img src="https://balenciaga.dam.kering.com/m/7c78d2710082259b/eCom-657037TKV826295_A.jpg?v=4" alt={caption}/>

                </div>
                <div className="topmans">
                  <img src={imgUrl} alt={caption}/>
                </div>
                {/* <div className="bottommans">
                  <img src="https://balenciaga.dam.kering.com/m/7c78d2710082259b/eCom-657037TKV826295_A.jpg?v=4" alt={caption}/>
                </div>
                <div className="shoesmans">
                   <img src="https://balenciaga.dam.kering.com/m/4d068244431ca435/Large-617196W2DBH3000_F.jpg?v=1" alt={caption}/>


                </div> */}
        </div>
        
    )
}

export default Man




