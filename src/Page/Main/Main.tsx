import React,{useState,useEffect} from 'react'
import './Main.scss';
import Cards from '../../component/Card' 
import Header from '../Public/Header'
import Bottom from '../Public/Bottom'
import Right from '../Post/Right';
import Left from '../Post/Left';

function Main() {
// 까꿍님이 해야할것 
// 1. 페이지 좋아요 버튼 만들어보기
// ( 클릭할때마다 숫자가 올라가는 버튼만들어보기)
  const [ like , setlike ] = useState(0);
// //////////////////////////////////////////////////////////

  return (
    <div className="MainPage">
      <div className="header">
        {/* 헤드 */}
        <Header></Header>
      </div>
      <div className="base">
        <div className="left-section">
          <Left></Left>
        </div>

      {/* 찌끄좌가 해야할것  왼쪽 카드들을 슬라이드로 만들기 */}



        <div className="right-side">
          <Right></Right>
        </div>
     
      </div>  
       {/* <div className="marketInfo">
        aa
      </div>   */}

      <div className="footer">
        {/* 바닥 */}
        <Bottom></Bottom>
      </div>

    </div>
  );
}

export default Main
