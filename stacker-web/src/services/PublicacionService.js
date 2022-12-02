import { CONTROLLER_PUBLICACION } from '../utils/Constantes';
import API from './API';

const CONTROLLER = CONTROLLER_PUBLICACION;

const obtener = async (id) => {
  return await API.get(`${CONTROLLER}/obtener/${id}`);
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

const obtenerTodoPuntaje = async () => {
  return await API.get(`${CONTROLLER}/obtener-todos-puntaje`);
};
const obtenerTodoHoraCreacion = async () => {
  return await API.get(`${CONTROLLER}/obtener-todos-hora-creacion`);
};
const obtenerTodoUltimaActualizacion = async () => {
  return await API.get(`${CONTROLLER}/obtener-todos-actualizacion`);
};

const puntuarPub = async (id) => {
  return await API.put(`${CONTROLLER}/puntuar/${id}`);
};

export default {
  obtener,
  obtenerTodoPuntaje,
  obtenerTodoHoraCreacion,
  obtenerTodoUltimaActualizacion,
  guardar,
  actualizar,
  borrar,
  puntuarPub,
};
