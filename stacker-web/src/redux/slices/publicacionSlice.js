import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  listaPubs: [],
  showModalCrearPub: false,
}

const publicacionSlice = createSlice({
  name: 'publicacion',
  initialState: initialState,
  reducers: {
  
    cargarPublicaciones: (state, action) => {
      state.listaPubs = action.payload;
    },

    mostrarModalCrearPub: (state) => {
      state.showModalCrearPub = true;
    },

    ocultarModalCrearPub: (state) => {
      state.showModalCrearPub = false;
    },
  }
})

export const { cargarPublicaciones, mostrarModalCrearPub, ocultarModalCrearPub } = publicacionSlice.actions
export default publicacionSlice.reducer