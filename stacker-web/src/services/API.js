import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { API_URL } from '../utils/Constantes';

let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    Accept: `application/vnd.iman.v1+json, application/json, text/plain, */*`,
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    Pragma: 'no-cache',
};

const filterOptions = ({ method, ...rest }) => rest;


const call = async(url, options = {}) => {

    try {
        const instance = axios.create({
            baseURL: API_URL,
        });

        instance.interceptors.request.use(
            (conf) => {
                return conf;
            },
            (error) => {
                return Promise.reject(error);
            },
        );

        instance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                console.log(JSON.stringify(error.response))
                let errorMessage = error.stack;

                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                    if (undefined != error.response.data.message) {
                        errorMessage = error.response.data.message;
                    }

                    //Fallo en validacion del DTO
                    if (error.response.data.descripcion) {
                        console.log(error.response.data.descripcion);
                        errorMessage = error.response.data.descripcion;
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

                return Promise.reject(errorMessage);
            },
        );

        const { data } = await instance.request({
            url,
            data: options['data'],
            params: options['params'],
            method: options['method'],
            headers: {...headers, ...options['headers'] },
            cancelToken: options['cancelFn'] ? new axios.CancelToken(options['cancelFn']) : null,
        });

        return data;
    } catch (err) {
        if (axios.isCancel(err)) {
            throw new Error('request-cancelled');
        } else {
            throw err;
        }
    }
};

const checkToken = async(options) => {
    
    let AUTH = { 'Authorization': token };
    if (null != token && token != '')
        return {...options, headers: AUTH }
    else
        return options;
}

const get = async(url, options = {}) => {
    options = await checkToken(options);
    return await trackPromise(call(url, {
        method: 'GET',
        ...filterOptions(options),
    }));
};

const post = async(url, options = {}) => {
    options = await checkToken(options);
    return await trackPromise(call(url, {
        method: 'POST',
        ...filterOptions(options),
    }));
};

const put = async(url, options = {}) => {
    options = await checkToken(options);

    return await trackPromise(call(url, {
        method: 'PUT',
        ...filterOptions(options),
    }));
};

const del = async(url, options = {}) => {
    options = await checkToken(options);
    return await trackPromise(call(url, {
        method: 'DELETE',
        ...filterOptions(options),
    }));
};

export default {
    get,
    post,
    put,
    delete: del,
};