import {createSlice} from '@reduxjs/toolkit';

 export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts:[]
    },
    reducers : {
        addPost : function(state , action){
            state.posts.push(action.payload);
        },
        deletePost : function(state , action){
           state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        updatePost : function (state , action){
            state.posts.map(post => {
                if(post.id == action.payload.id){
                    post.title = action.payload.title;
                    post.desc = action.payload.desc;
                }
            })
        }
    },
})

export const { addPost , deletePost , updatePost } = postsSlice.actions

export default postsSlice.reducer