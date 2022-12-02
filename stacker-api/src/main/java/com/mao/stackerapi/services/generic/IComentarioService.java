package com.mao.stackerapi.services.generic;

import java.util.List;

import com.mao.stackerapi.dto.api.ComentarioDTO;
import com.mao.stackerapi.exceptions.api.ComentarioServiceException;

public interface IComentarioService {

    public ComentarioDTO obtenerComentario(Long id) throws ComentarioServiceException;

    public List<ComentarioDTO> obtenerTodoComentario() throws ComentarioServiceException;

    public ComentarioDTO guardarComentario(ComentarioDTO comentarioDTO) throws ComentarioServiceException;

    public ComentarioDTO actualizarComentario(ComentarioDTO comentarioDTO) throws ComentarioServiceException;

    public Long borrarComentario(Long id) throws ComentarioServiceException;

    public List<ComentarioDTO> obtenerTodoPorPublicacion(Long idPublicacion) throws ComentarioServiceException;
    
    public Integer puntuarComentario(Long idComentario) throws ComentarioServiceException;
}
