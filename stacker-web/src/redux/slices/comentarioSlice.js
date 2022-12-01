import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE ={
  listaComents: [],
  idRespuesta: null,
  refRespuesta: null,
  msgRespuesta: '',
  mensaje: '',
}

const comentarioSlice = createSlice({
  name: 'comentario',
  initialState: INITIAL_STATE,
  reducers: {
  
    cargarComentarios: (state, action) => {
      state.listaComents = action.payload;
    },

    limpiarListaComents: () => INITIAL_STATE,

    escribirMensaje: (state, action) => {
      state.mensaje = action.payload;
    },

    limpiarMensajeAlEnviarNuevo: (state, action) => {
      state.mensaje = '';
      state.idRespuesta = null;
      state.refRespuesta = null;
      state.msgRespuesta = '';
      state.listaComents.push(action.payload);
    },

    responderA: (state, action) => {
      state.idRespuesta = action.payload.id;
      state.refRespuesta = action.payload.comRef;
      state.msgRespuesta = action.payload.msgRespuesta;
    },

    limpiarResponder: (state) => {
      state.idRespuesta = null;
      state.refRespuesta = null;
      state.msgRespuesta = '';
    }
  }
})

export const { 
  cargarComentarios, 
  limpiarListaComents, 
  escribirMensaje, 
  limpiarMensajeAlEnviarNuevo, 
  responderA,
  limpiarResponder  
} = comentarioSlice.actions
export default comentarioSlice.reducer