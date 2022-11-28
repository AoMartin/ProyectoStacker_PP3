import { CONTROLLER_COMENTARIO } from '../utils/Constantes';
import API from './API';

const CONTROLLER = CONTROLLER_PUBLICACION;

const obtener = async (id) => {
  return await API.get(`${CONTROLLER}/obtener/${id}`);
};

const obtenerTodo = async () => {
  return await API.get(`${CONTROLLER}/obtener-todos`);
};

const guardar = async (bodyData) => {
  return await API.post(`${CONTROLLER}/guardar`, { data: {...bodyData}});
};

const actualizar = async (bodyData) => {
  return await API.put(`${CONTROLLER}/actualizar`, { data: {...bodyData}});
};

const borrar = async (id) => {
  return await API.delete(`${CONTROLLER}/borrar/${id}`);
};

export default {
  obtener,
  obtenerTodo,
  guardar,
  actualizar,
  borrar,
};
