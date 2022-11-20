package com.mao.stackerapi.services.generic;

import java.util.List;

import com.mao.stackerapi.dto.api.PublicacionDTO;
import com.mao.stackerapi.exceptions.api.PublicacionServiceException;

/**
 * <p>
 * Service utilizado para realizar los servicios de la entidad Publicacion
 * </p>
 *
 * @since 20/11/2022
 * @author molsson
 */
public interface IPublicacionService {
    /**
     * <p>
     * Obtiene los datos de Publicacion guardados en la base de datos dado un ID
     * </p>
     *
     * @return PublicacionDTO
     * @since 20/11/2022
     * @throws PublicacionServiceException
     * @author molsson
     */
    public PublicacionDTO obtenerPublicacion(Long id) throws PublicacionServiceException;

    /**
     * <p>
     * Obtiene todos los datos de Publicacion guardados en la base de datos
     * </p>
     *
     * @return List<PublicacionDTO>
     * @since 20/11/2022
     * @throws PublicacionServiceException
     * @author molsson
     */
    public List<PublicacionDTO> obtenerTodoPublicacion() throws PublicacionServiceException;

    /**
     * <p>
     * Guarda los datos de Publicacion en la base de datos con los datos recibidos
     * </p>
     *
     * @param PublicacionDTO
     * @return PublicacionDTO
     * @since 20/11/2022
     * @throws PublicacionServiceException
     * @author molsson
     */
    public PublicacionDTO guardarPublicacion(PublicacionDTO publicacionDTO) throws PublicacionServiceException;

    /**
     * <p>
     * Actualiza los datos de Publicacion en la base de datos con los datos recibidos
     * </p>
     *
     * @param PublicacionDTO
     * @return PublicacionDTO
     * @since 20/11/2022
     * @throws PublicacionServiceException
     * @author molsson
     */
    public PublicacionDTO actualizarPublicacion(PublicacionDTO publicacionDTO) throws PublicacionServiceException;

    /**
     * <p>
     * Borrar los datos de Publicacion en la base de datos dado un ID
     * </p>
     *
     * @param id
     * @return Long
     * @since 20/11/2022
     * @throws PublicacionServiceException
     * @author molsson
     */
    public Long borrarPublicacion(Long id) throws PublicacionServiceException;

  
}
