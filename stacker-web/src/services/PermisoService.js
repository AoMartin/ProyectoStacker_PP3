import { CONTROLLER_PERMISO } from '../utils/Constantes';
import API from './API';

const CONTROLLER = CONTROLLER_PERMISO;

const asignar = async (bodyData) => {
  return await API.put(`${CONTROLLER}/asignar`, { data: {...bodyData}});
};

const borrar = async (bodyData) => {
  return await API.delete(`${CONTROLLER}/borrar`, { data: {...bodyData}});
};


export default {
  asignar,
  borrar,
};
