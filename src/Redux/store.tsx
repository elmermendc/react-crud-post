import {configureStore} from '@reduxjs/toolkit'
import inicioPostEstado from './estados/InicioPost.estado';
import postSlice from './estados/Post.estado'


export const store = configureStore({
    reducer: {
        post:postSlice,
        iniciopost: inicioPostEstado        
    }
})
export type RootState = ReturnType<typeof store.getState>;
