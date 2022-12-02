import { CONTROLLER_COMENTARIO } from '../utils/Constantes';
import API from './API';

const CONTROLLER = CONTROLLER_COMENTARIO;

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

const obtenerTodoPorIdPub = async (id) => {
  return await API.get(`${CONTROLLER}/obtener-todos-pub/${id}`);
};

const puntuarComent = async (id) => {
  return await API.put(`${CONTROLLER}/puntuar/${id}`);
};


export default {
  obtener,
  obtenerTodo,
  guardar,
  actualizar,
  borrar,
  obtenerTodoPorIdPub,
  puntuarComent,
};
