import React,{useState,useEffect} from 'react'
import './Main.css';
import Cards from '../../component/Card' 


function Main() {
// 까꿍님이 해야할것 
// 1. 페이지 좋아요 버튼 만들어보기
// ( 클릭할때마다 숫자가 올라가는 버튼만들어보기)
  const [ like , setlike ] = useState(0);
// //////////////////////////////////////////////////////////

  return (
    <div className="App">
      <div className="header">
        {/* 헤드 */}
        {/* -------------------------------------- */}
         1
         <button className="likeButton">
            ❤aa
         </button>
         {/* --------------------------------------- */}
      </div>
      <div className="base">
        <div className="right-side">
          {/* 우측 */}
     
          <div className="mirror">
            {/* 사람 */}
            <img src="http://clipart-library.com/image_gallery2/Man-PNG-HD.png" alt=""/>
          </div>
            <div className="itemList">
            
            </div>

        </div>

      {/* 찌끄좌가 해야할것  왼쪽 카드들을 슬라이드로 만들기 */}



        <div className="left-side">
          {/* 좌측 */}
          {/* 상의 */}aa
          <div className="top items item1">
            <div className="top line">
              top
            </div>
           <Cards/>
          </div>
          {/* 하의 */}
          <div className="bottom items">
              <div className="top line">
                bottom
            </div>
           <Cards/>
          </div>
          {/* 신발 */}
          <div className="foot items">
              <div className="top line">
                shoes
            </div>
           <Cards/>
          </div>
        </div>
     
      </div>  
       {/* <div className="marketInfo">
        aa
      </div>   */}

      <div className="footer">
        {/* 바닥 */}
      </div>

    </div>
  );
}

export default Main