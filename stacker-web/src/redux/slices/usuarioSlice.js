import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  login: sessionStorage.getItem('session') ? JSON.parse(sessionStorage.getItem('session')) : {
    userName: '',
    img: '',
    token: '',
    lastLoginDate: '',
  },
  loginModalOpen: false,
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

    userLogin: (state, action) => {
      state.login = action.payload
    },

    userLogout: () => INITIAL_STATE,

    userImgUpdate: (state, action) => {
      state.login.img = action.payload
    },

  }
})


export const { openLoginModal, closeLoginModal, userLogin, userLogout, userImgUpdate } = usuarioSlice.actions
export default usuarioSlice.reducer


