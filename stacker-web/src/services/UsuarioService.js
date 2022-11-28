import { CONTROLLER_USUARIO } from '../utils/Constantes';
import API from './API';

const CONTROLLER = CONTROLLER_USUARIO;


const cambiarImagen = async ( bodyData) => {
  return await API.put(`${CONTROLLER}/cambiar-imagen`, { data: bodyData });
};


export default {
  cambiarImagen
};
