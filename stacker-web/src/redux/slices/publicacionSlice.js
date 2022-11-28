import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  listaPubs: [],
}

const publicacionSlice = createSlice({
  name: 'publicacion',
  initialState: initialState,
  reducers: {
    cargarPublicaciones: (state, action) => {
      state.listaPubs = action.payload;
    },
  }
})

export const { cargarPublicaciones } = publicacionSlice.actions
export default publicacionSlice.reducer