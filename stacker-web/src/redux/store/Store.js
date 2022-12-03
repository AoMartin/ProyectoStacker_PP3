import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from '../slices/usuarioSlice'
import pubsReducer from '../slices/publicacionSlice'
import comentarioReducer from '../slices/comentarioSlice'
import avisoReducer from '../slices/avisoSlice'

export const Store = configureStore({
  reducer: {
    //publicaciones: publicacionReducer,
    usuario: usuarioReducer,
    pubs: pubsReducer,
    coments: comentarioReducer,
    aviso: avisoReducer,
  }
})

