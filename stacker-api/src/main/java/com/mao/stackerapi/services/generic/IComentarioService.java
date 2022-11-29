package com.mao.stackerapi.services.generic;

import java.util.List;

import com.mao.stackerapi.dto.api.ComentarioDTO;
import com.mao.stackerapi.exceptions.api.ComentarioServiceException;

/**
 * <p>
 * Service utilizado para realizar los servicios de la entidad Comentario
 * </p>
 *
 * @since 20/11/2022
 * @author molsson
 */
public interface IComentarioService {
    /**
     * <p>
     * Obtiene los datos de Comentario guardados en la base de datos dado un ID
     * </p>
     *
     * @return ComentarioDTO
     * @since 20/11/2022
     * @throws ComentarioServiceException
     * @author molsson
     */
    public ComentarioDTO obtenerComentario(Long id) throws ComentarioServiceException;

    /**
     * <p>
     * Obtiene todos los datos de Comentario guardados en la base de datos
     * </p>
     *
     * @return List<ComentarioDTO>
     * @since 20/11/2022
     * @throws ComentarioServiceException
     * @author molsson
     */
    public List<ComentarioDTO> obtenerTodoComentario() throws ComentarioServiceException;

    /**
     * <p>
     * Guarda los datos de Comentario en la base de datos con los datos recibidos
     * </p>
     *
     * @param ComentarioDTO
     * @return ComentarioDTO
     * @since 20/11/2022
     * @throws ComentarioServiceException
     * @author molsson
     */
    public ComentarioDTO guardarComentario(ComentarioDTO comentarioDTO) throws ComentarioServiceException;

    /**
     * <p>
     * Actualiza los datos de Comentario en la base de datos con los datos recibidos
     * </p>
     *
     * @param ComentarioDTO
     * @return ComentarioDTO
     * @since 20/11/2022
     * @throws ComentarioServiceException
     * @author molsson
     */
    public ComentarioDTO actualizarComentario(ComentarioDTO comentarioDTO) throws ComentarioServiceException;

    /**
     * <p>
     * Borrar los datos de Comentario en la base de datos dado un ID
     * </p>
     *
     * @param id
     * @return Long
     * @since 20/11/2022
     * @throws ComentarioServiceException
     * @author molsson
     */
    public Long borrarComentario(Long id) throws ComentarioServiceException;

    public List<ComentarioDTO> obtenerTodoPorPublicacion(Long idPublicacion) throws ComentarioServiceException;
}
