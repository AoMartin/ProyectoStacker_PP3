import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE ={
  listaPubs: [],
  showModalCrearPub: false,
  actualPubData: {},
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

    selectPub:(state, action)=>{
      state.actualPubData = action.payload;
    },

    actualizarPuntajePubs: (state, action) =>{
      state.actualPubData.puntaje = action.payload.puntaje;
      state.listaPubs.map(p =>{
        if(p.idPublicacion == action.payload.id){
          p.puntaje = action.payload.puntaje
        }
      }).sort((a,b) => a.puntaje - b.puntaje)
    },

  }
})

export const { cargarPublicaciones, mostrarModalCrearPub, ocultarModalCrearPub, actualizarPuntajePubs, selectPub } = publicacionSlice.actions
export default publicacionSlice.reducer