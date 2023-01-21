import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState} from '../store'
import { ListaPost, PostUnico } from "../../models/Post";

const initialState: ListaPost = {
  list: [],
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addFavoritos: (state: ListaPost, action: PayloadAction<PostUnico>) => {
      state.list.push(action.payload);
    },
    removeFavoritos:(state:ListaPost, action: PayloadAction<PostUnico>) =>{
      state.list = state.list.filter((val)=>val.id != action.payload.id)

    }

  },
});

export const { addFavoritos, removeFavoritos } = postSlice.actions;
export default postSlice.reducer;

export const seleccionarPost = (state: RootState)=> state.post.list