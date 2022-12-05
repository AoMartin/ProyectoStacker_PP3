import { createSlice } from '@reduxjs/toolkit'

const filterData = {
  titulo: '',
  cantidadComentarios: null,
  puntaje: null,
  usuario: '',
}

const INITIAL_STATE ={
  listaPubs: [],
  listaPubsGestionar: [],
  showModalCrearPub: false,
  showModalFiltrar: false,
  listaBkp:[],
  actualFilter: filterData,
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

    mostrarModalFiltrar: (state) => {
      state.actualFilter = filterData;
      state.listaBkp = state.listaPubs.slice();
      state.showModalFiltrar = true;
    },

    ocultarModalFiltrar: (state) => {
      state.showModalFiltrar = false;
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

    actualizarFiltro:(state,action)=>{
      state.actualFilter[action.payload.prop] = action.payload.value;
    },

    filtrar:(state,action)=>{
      let paraFiltrar =  state.listaBkp.slice();
      if(action.payload.titulo != ''){
        paraFiltrar = paraFiltrar.filter( p => p.titulo.toLowerCase().includes(action.payload.titulo.toLowerCase())); 
      }
      if(action.payload.puntaje != null){
        paraFiltrar = paraFiltrar.filter( p =>  p.puntaje >= action.payload.puntaje); 
      }
      if(action.payload.cantidadComentarios != null){
        paraFiltrar = paraFiltrar.filter( p => p.cantidadComentarios >= action.payload.cantidadComentarios); 
      }
      if(action.payload.usuario != ''){
        paraFiltrar = paraFiltrar.filter( p => p.usuario.user.toLowerCase().includes(action.payload.usuario.toLowerCase())); 
      }
      state.listaPubs = paraFiltrar;
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
  filtrar,
  actualizarFiltro,
  selectPub, 
  limpiarListaPubs,
  mostrarModalFiltrar,
  ocultarModalFiltrar,
  eliminarPub } = publicacionSlice.actions
export default publicacionSlice.reducer