import { CONTROLLER_LOGIN } from '../utils/Constantes';
import API from './API';

const CONTROLLER = CONTROLLER_LOGIN;


const autenticarUsuario = async (bodyData) => {
  return await API.post(`${CONTROLLER}/autenticar-usuario`, { data: bodyData });
};


export default {
  autenticarUsuario
};
