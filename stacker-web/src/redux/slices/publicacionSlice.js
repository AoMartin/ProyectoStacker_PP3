import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE ={
  listaPubs: [],
  showModalCrearPub: false,
}

const publicacionSlice = createSlice({
  name: 'publicacion',
  initialState: INITIAL_STATE,
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