import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListaPost, PostUnico } from "../../models/Post";
import { RootState } from "../store";

const initialState = {
  list: []
};

const postsInicioSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {        
        addInicio:(state, action) => {
            state.list = action.payload;
        },
        remInicio:(state:ListaPost, action: PayloadAction<PostUnico>)=>{
            state.list = state.list.filter(st=>st.id!=action.payload.id)
        },
        addInicioNuevo:(state:ListaPost, action: PayloadAction<PostUnico>)=>{
                 
            state.list.push(action.payload);
        },
        updateInicio:(state:ListaPost, action: PayloadAction<PostUnico>)=>{
            const encontrar = state.list.find((st)=>st.id===action.payload.id)
            
            if(encontrar){
                encontrar.title=action.payload.title;
                encontrar.body=action.payload.body;
            }            
            
        }
        
    },
   
});
export const {  addInicio, remInicio, addInicioNuevo,updateInicio} = postsInicioSlice.actions;
export default postsInicioSlice.reducer;
export const seleccionarPostInicio = (state: RootState)=> state.iniciopost.list