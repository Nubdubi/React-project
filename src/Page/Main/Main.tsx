import React,{useState,useEffect} from 'react'
import './Main.scss';
import { db, auth, storage } from '../../firebase'
import Cards from '../../component/Card' 
import Header from '../Public/Header'
import Bottom from '../Public/Bottom'
import Right from '../Post/Right';
import Left from '../Post/Left';


function Main() {
  
    type Post = { id: string; post: object;  };
  
    const [posts, setPosts] = useState<Post[]>([]);
    const [comments,setComments] = useState([]);
    const [comment, setCommnets] = useState<string>('');
    
  const [ like , setlike ] = useState(0);
// //////////////////////////////////////////////////////////
 
  useEffect(() => {
    db.collection("post")
      .orderBy("productNumber", "asc")
      .onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      }))); 
    })
   
  }, []);
  
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
