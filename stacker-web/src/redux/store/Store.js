import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from '../slices/usuarioSlice'
import pubsReducer from '../slices/publicacionSlice'

export const Store = configureStore({
  reducer: {
    //publicaciones: publicacionReducer,
    usuario: usuarioReducer,
    pubs: pubsReducer,
  }
})

