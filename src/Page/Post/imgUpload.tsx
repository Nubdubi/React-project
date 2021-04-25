import React,{useState} from 'react'
import 'firebase'
import {db,storage} from '../../firebase'

function Posts() {
    const [image,setImage] = useState<any>(null);
    const [url, setUrl] = useState<string>("");
    const [progress, setProgress] = useState(0);
    const [caption,setCaption]=useState<string>('');
    
    const handleChange = (e:any) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);

        };
    }
     const handleUpload = () =>{
       const uploadTask = storage.ref(`images/${image.name}`).put(image);
       uploadTask.on(
            "state_changed",
            (snapshot)=> {
                const progress = Math.round(
                    snapshot.bytesTransferred / snapshot.totalBytes * 100);
                    setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage.ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("post").add({
                        caption: caption,
                        imgUrl:url,
                    })
                })
            }
       )
    }

    return (
        <div>
            <input type="text" onChange={event => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload}>
                Upload
            </button>
        </div>
    )
}

export default Posts
