import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE ={
  listaComents: [],
}

const comentarioSlice = createSlice({
  name: 'comentario',
  initialState: INITIAL_STATE,
  reducers: {
  
    cargarComentarios: (state, action) => {
      state.listaPubs = action.payload;
    },

    limpiarListaComents: () => INITIAL_STATE,
  }
})

export const { cargarPublicaciones, limpiarListaComents  } = comentarioSlice.actions
export default comentarioSlice.reducer