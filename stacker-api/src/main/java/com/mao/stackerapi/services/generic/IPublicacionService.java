package com.mao.stackerapi.services.generic;

import java.util.List;

import com.mao.stackerapi.dto.api.PublicacionDTO;
import com.mao.stackerapi.exceptions.api.ComentarioServiceException;
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

	public List<PublicacionDTO> obtenerTodoPublicacionPuntaje() throws PublicacionServiceException;
	public List<PublicacionDTO> obtenerTodoPublicacionHoraCreacion() throws PublicacionServiceException;
	public List<PublicacionDTO> obtenerTodoPublicacionUltimaActualizacion() throws PublicacionServiceException;
	
    public PublicacionDTO obtenerPublicacion(Long id) throws PublicacionServiceException;

    public PublicacionDTO guardarPublicacion(PublicacionDTO publicacionDTO) throws PublicacionServiceException;

    public PublicacionDTO actualizarPublicacion(PublicacionDTO publicacionDTO) throws PublicacionServiceException;

    public Long borrarPublicacion(Long id) throws PublicacionServiceException;

    public Boolean notificarModificacion(Long idPublicacion) throws PublicacionServiceException;

    public Integer puntuarPublicacion(Long idPublicacion) throws PublicacionServiceException;
    
    public List<PublicacionDTO> obtenerTodoPorIdUsuario(Long idUsuario) throws PublicacionServiceException;
    
    public List<PublicacionDTO> buscarPorTitulo(String buscar) throws PublicacionServiceException;
}
