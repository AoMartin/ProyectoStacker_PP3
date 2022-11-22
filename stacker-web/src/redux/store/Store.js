import { configureStore } from '@reduxjs/toolkit'
import publicacionReducer from '../slices/publicacionSlice'
import usuarioReducer from '../slices/usuarioSlice'

export const Store = configureStore({
  reducer: {
    //publicaciones: publicacionReducer,
    usuario: usuarioReducer
  }
})

