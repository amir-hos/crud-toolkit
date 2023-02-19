import {configureStore  } from '@reduxjs/toolkit';
import postsSlice from './postsSlice';
const store = configureStore ({
    reducer:{
        post : postsSlice
    },
});
export default store