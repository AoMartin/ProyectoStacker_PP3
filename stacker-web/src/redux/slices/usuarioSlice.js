import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.usuario.push(action.payload)
    })
  },
})

const userLogin = createAsyncThunk(
  'usuario/login',
  async (loginData, thunkAPI) => {
    let response = null;

    try {
      response = await LoginService.autenticarUsuario(loginData);
    } catch (error) {
      //TODO dispatch(abrirModalAvisoUsuario('Fallo al registrar intentar loguearse.', false, error));
    }
    if (null == response) return;

    sessionStorage.setItem('session', JSON.stringify(response));
    return response
  }
)

export const { userLogout, userImgUpdate } = usuarioSlice.actions
export default usuarioSlice.reducer