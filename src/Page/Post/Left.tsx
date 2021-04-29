import React,{useState,useRef,useEffect} from 'react'
import './Left.scss'
import { db } from '../../firebase'
import Man from '../../component/Man'

function Left() {
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
        <div className="Left-side">
                      {/* 우측 */}
     
          <div className="mirror">
            {/* 사람 */}
            <div className="bmibox">

           
            <button>Man</button>
            <button>Woman</button>

            </div>
            <div className="manbox">
              <img src="https://i.pinimg.com/originals/84/12/71/8412715b792dc8e26f384ce8d26e8304.jpg" alt="" width="492px" height="610px"/>
                    {/* <Man/> */}
                {/* {posts.map(({id,post})=>(
          
            ))} */}
            </div>
          </div>
            <div className="itemList">
            
            </div>

        </div>
    )
}

export default Left
