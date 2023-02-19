import React , {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPost, deletePost, updatePost} from '../redux/postsSlice';
export default function Posts() {
    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
    const [isEdit , setIsEdit] = useState(false);
    const [id , setId] = useState(null);
    const [updateTitle , setUpdateTitle] = useState("");
    const [updateDesc , setUpdateDesc] = useState("");
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.post.posts)

    return (
        <div>
            <div className="form">
                <input
                 type="text" 
                 value={title}
                 placeholder="Enter post title"
                 onChange={(e)=> setTitle(e.target.value)}
                 />
                <input
                 type="text" placeholder="Enter post desc"
                 value={desc}
                 onChange={(e)=> setDesc(e.target.value)}
                 />
                <button onClick= {() =>{
                    dispatch(addPost({id : posts.length + 1 , title , desc}))
                    setTitle("");
                    setDesc('')
                }}>
                    Add post
                </button>
            </div>


            {posts.length >0 ? posts.map(post => <div key={post.id} className="posts">
                <h2>item{post.id}</h2>
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
                <button onClick={()=> {
                    setIsEdit(true)
                    setId(post.id)
                }}>Edit</button>
                <button onClick={()=> {dispatch(deletePost(post.id))}}>Delete</button>
                <br/>
                {isEdit && id == post.id && (
                    <>
                    <input 
                    type="text" placeholder="update title"
                    onChange={(e) => setUpdateTitle(e.target.value)}
                     />
                    <input 
                    type="text" placeholder="update desc"
                    onChange={(e) => setUpdateDesc(e.target.value)}
                    />
                    <button onClick={()=> {dispatch(updatePost({id: post.id ,title : updateTitle , desc : updateDesc}))
                    setIsEdit(false)
                    }}>
                    update
                    </button>
                    
                    </>
                )}
        </div>) : 'there is no items'}
        </div>
    )
}
