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
                {posts.map(({id,post})=>(
              <Man/>
            ))}
            </div>
          </div>
            <div className="itemList">
            
            </div>

        </div>
    )
}

export default Left
