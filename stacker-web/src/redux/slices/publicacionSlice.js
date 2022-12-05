import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE ={
  listaPubs: [],
  listaPubsGestionar: [],
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

    eliminarPub:(state,action)=>{
      state.listaPubs = state.listaPubs.filter( p => p.idPublicacion != action.payload); 
    },

    limpiarListaPubs:(state)=>{
      state.listaPubs = [];
    },
  }
})

export const { 
  cargarPublicaciones, 
  mostrarModalCrearPub, 
  ocultarModalCrearPub, 
  actualizarPuntajePubs, 
  selectPub, 
  limpiarListaPubs,
  eliminarPub } = publicacionSlice.actions
export default publicacionSlice.reducer