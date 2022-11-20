package com.mao.stackerapi.exceptions.api;

import java.io.Serializable;

/**
 * <h1>PublicacionServiceException</h1>
 * <p>
 * Clase encargado de capturar errores del service de Publicacion.
 * </p>
 *
 * @author molsson
 * @since 20/11/2022
 *
 */
public class ComentarioServiceException extends Exception implements Serializable{


	/**
	 * 
	 */
	private static final long serialVersionUID = -8425747667916197744L;
	public static final String DEFAULT_MESSAGE = "Se produjo un error en el service de Publicacion. ";
	public static final String NO_ENCONTRADO = "No se encontro la entidad deseada de Publicacion. ";

    public ComentarioServiceException(String message, Throwable cause ) {
        super(message, cause);
    }
    public ComentarioServiceException(String message ) {
        super(message);
    }

    public ComentarioServiceException() {

    }
}

