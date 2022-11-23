import { configureStore } from '@reduxjs/toolkit'
import usuarioSlice from '../slices/usuarioSlice'

export const Store = configureStore({
  reducer: {
    //publicaciones: publicacionReducer,
    usuario: usuarioSlice.reducer
  }
})

