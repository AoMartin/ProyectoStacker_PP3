import {  createSlice } from '@reduxjs/toolkit'
import LoginService from '../../services/LoginService'

const loginInicial = {
  userName: '',
  img: '',
  token: '',
  lastLoginDate: ''
}

const INITIAL_STATE = {
  login: sessionStorage.getItem('session') ? JSON.parse(sessionStorage.getItem('session')) : loginInicial,
}

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: INITIAL_STATE,
  reducers: {
    userLogout: (state) => {
      state.push(INITIAL_STATE)
    },

    userImgUpdate: (state, action) => {
      //TODO: actualizar en back
      state.push({
        img: action.payload
      })
    },

  }
})


export const { userLogout, userImgUpdate } = usuarioSlice.actions
export default usuarioSlice