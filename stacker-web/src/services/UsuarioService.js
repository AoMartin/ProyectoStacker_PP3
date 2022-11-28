import { CONTROLLER_USUARIO } from '../utils/Constantes';
import API from './API';

const CONTROLLER = CONTROLLER_USUARIO;


const cambiarImagen = async (idLogin, bodyData) => {
  return await API.put(`${CONTROLLER}/cambiar-imagen/${idLogin}`, { data: bodyData });
};


export default {
  cambiarImagen
};
