import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  login: sessionStorage.getItem('session') ? JSON.parse(sessionStorage.getItem('session')) : {
    id: -1,
    userName: '',
    img: '',
    token: '',
    lastLoginDate: '',
    tipoPermiso: null,
  },
  loginModalOpen: false,
  imagenModalOpen: false,
  listaUsuarios: [],
}

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: INITIAL_STATE,
  reducers: {
    openLoginModal: (state) => {
      state.loginModalOpen = true;
    },

    closeLoginModal: (state) => {
      state.loginModalOpen = false;
    },

    openImagenModal: (state) => {
      state.imagenModalOpen = true;
    },

    closeImagenModal: (state) => {
      state.imagenModalOpen = false;
    },

    userLogin: (state, action) => {
      state.login = action.payload;
    },

    userLogout: () => INITIAL_STATE,

    userImgUpdate: (state, action) => {
      state.login.img = action.payload
      sessionStorage.setItem('session', JSON.stringify(state.login));
    },

    cargarListaUsuarios: (state, action) =>{
      state.listaUsuarios = action.payload
    },

    limpiarListaUsuarios: (state) =>{
      state.listaUsuarios = []
    },
  }
})


export const { openLoginModal, closeLoginModal, openImagenModal, closeImagenModal, userLogin, userLogout, userImgUpdate, cargarListaUsuarios, limpiarListaUsuarios } = usuarioSlice.actions
export default usuarioSlice.reducer


