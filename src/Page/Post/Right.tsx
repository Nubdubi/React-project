import React,{useState,useRef,useEffect} from 'react'
import Cards from '../../component/Card'
import { db } from '../../firebase'
import ImgUpload from './imgUpload';
import './Right.scss'

function Right() {
      type Posts = { id: string; post:any; };

      const slideRef =useRef();
      const [posts, setPosts] = useState<Posts[]>([]);

      useEffect(() => {
        db.collection("post")
          .orderBy("caption", "asc")
          .onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data()
          }))); 
        })
      
      }, []);
      
    return (
        <div className="left-side">
            {/* 좌측 */}
          {/* 상의 */}
          <div className="createItem">
           <ImgUpload/>

          </div>
          <div className="top items item1">
            <div className="top line">
              top
            </div>
          <div className="topitem">
          
            {posts.map(({id,post})=>(
              <Cards key={id} caption={post.caption} imgUrl={post.imgUrl}/>
            ))}
            
          </div>
          
          </div>
          {/* 하의 */}
          <div className="bottom items">
              <div className="top line">
                bottom
            </div>
             <div className="topitem">
            {/* {posts.map(({id,post})=>(
              <Cards key={id} caption={post.caption} imgUrl={post.imgUrl}/>
            ))}; */}
            <Cards caption="hello" imgUrl="https://balenciaga.dam.kering.com/m/28e78e4101d95722/Large-657120TKVB14011_F.jpg?v=4"/>
          </div>
          </div>
          {/* 신발 */}
          <div className="foot items">
              <div className="top line">
                shoes
            </div>
             <div className="topitem">
            {/* {posts.map(({id,post})=>(
              <Cards key={id} caption={post.caption} imgUrl={post.imgUrl}/>
            ))}; */}
            <Cards caption="hello" imgUrl="https://balenciaga.dam.kering.com/m/4d068244431ca435/Large-617196W2DBH3000_F.jpg?v=1"/>

          </div>
          </div>




        </div>
    )
}

export default Right
