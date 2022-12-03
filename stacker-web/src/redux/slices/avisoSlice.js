import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    modal: {
        show: false,
        mensaje: '',
    }
}

const avisoSlice = createSlice({
    name: 'aviso',
    initialState: INITIAL_STATE,
    reducers: {

        abrirModalAvisoUsuario: (state, action) => {
            state.modal.show = true;
            state.modal.mensaje = action.payload;
        },

        cerrarModalAvisoUsuario: (state) => {
            state.modal.show = false;
            state.modal.mensaje = '';
        }
    }
})

export const {
    abrirModalAvisoUsuario,
    cerrarModalAvisoUsuario,
} = avisoSlice.actions
export default avisoSlice.reducer