import { CONTROLLER_LOGIN } from '../utils/Constantes';
import API from './API';

const CONTROLLER = CONTROLLER_LOGIN;


const autenticarUsuario = async (bodyData) => {
  return await API.post(`${CONTROLLER}/autenticar-usuario`, { data: bodyData });
};

const buscarUsuario = async (buscar) => {
  return await API.get(`${CONTROLLER}/buscar/${buscar}`);
};

export default {
  autenticarUsuario,
  buscarUsuario
};
