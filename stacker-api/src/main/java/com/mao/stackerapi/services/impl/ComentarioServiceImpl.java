package com.mao.stackerapi.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mao.stackerapi.dto.api.ComentarioDTO;
import com.mao.stackerapi.exceptions.api.ComentarioServiceException;
import com.mao.stackerapi.mapper.api.ComentarioMapper;
import com.mao.stackerapi.models.api.ComentarioBO;
import com.mao.stackerapi.repository.api.IComentarioRepository;
import com.mao.stackerapi.services.generic.IComentarioService;
import com.mao.stackerapi.services.generic.IPublicacionService;

/**
 * <p>
 * Implementacion de Services de Comentario
 * </p>
 *
 * @since 20/11/2022
 * @author molsson
 */
@Service
public class ComentarioServiceImpl implements IComentarioService {

    private static final Logger logger = LogManager.getLogger(ComentarioServiceImpl.class);

    @Autowired
    private ComentarioMapper comentarioMapper;

    @Autowired
    private IComentarioRepository comentarioRepository;
    
    @Autowired
    private IPublicacionService publicacionService;

    @Override
    public ComentarioDTO obtenerComentario(Long id) throws ComentarioServiceException {
        logger.debug("ComentarioServiceImpl: Ingresando a obtenerComentario...");
        ComentarioDTO dto = new ComentarioDTO();

        try {
            Optional<ComentarioBO> bo = comentarioRepository.findById(id);
            if (!bo.isPresent()) {
                throw new ComentarioServiceException(ComentarioServiceException.NO_ENCONTRADO);
            } else {
                dto = comentarioMapper.toDTO(bo.get());
            }
        } catch (Exception e) {
            logger.error(e);
            throw new ComentarioServiceException(ComentarioServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("ComentarioServiceImpl: Saliendo de obtenerComentario...");
        return dto;
    }

    @Override
    public List<ComentarioDTO> obtenerTodoComentario() throws ComentarioServiceException {
        logger.debug("ComentarioServiceImpl: Ingresando a obtenerTodoComentario...");
        List<ComentarioDTO> listaDto = new ArrayList<>();

        try {
            List<ComentarioBO> boLista = comentarioRepository.findAll();

            for (ComentarioBO bo : boLista) {
                ComentarioDTO dto = comentarioMapper.toDTO(bo);
                listaDto.add(dto);
            }
        } catch (Exception e) {
            logger.error(e);
            throw new ComentarioServiceException(ComentarioServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("ComentarioServiceImpl: Saliendo de obtenerTodoComentario...");
        return listaDto;
    }

    @Override
    public ComentarioDTO guardarComentario(ComentarioDTO comentarioDTO) throws ComentarioServiceException {
        logger.debug("ComentarioServiceImpl: Ingresando a guardarComentario...");
        ComentarioDTO dto = null;

        try {
            ComentarioBO bo = comentarioMapper.fromDTO(comentarioDTO);

            ComentarioBO guardado = comentarioRepository.save(bo);
            dto = comentarioMapper.toDTO(guardado);
            
            publicacionService.notificarModificacion(dto.getIdPublicacion());
        } catch (Exception e) {
            logger.error(e);
            throw new ComentarioServiceException(ComentarioServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("ComentarioServiceImpl: Saliendo de guardarComentario...");
        return dto;
    }

    @Override
    public ComentarioDTO actualizarComentario(ComentarioDTO comentarioDTO) throws ComentarioServiceException {
        logger.debug("ComentarioServiceImpl: Ingresando a actualizarComentario...");
        ComentarioDTO dto = null;

        try {
            ComentarioBO bo = comentarioMapper.fromDTO(comentarioDTO);

            ComentarioBO guardado = comentarioRepository.save(bo);
            dto = comentarioMapper.toDTO(guardado);
            
            publicacionService.notificarModificacion(dto.getIdPublicacion());
        } catch (Exception e) {
            logger.error(e);
            throw new ComentarioServiceException(ComentarioServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("ComentarioServiceImpl: Saliendo de actualizarComentario...");
        return dto;
    }

    @Override
    public Long borrarComentario(Long id) throws ComentarioServiceException {
        logger.debug("ComentarioServiceImpl: Ingresando a borrarComentario...");

        try {
        	List<ComentarioBO> listaAsociados = comentarioRepository.findByRespuestaIdComentario(id);
        	
        	if(listaAsociados.isEmpty()) {        		
        		comentarioRepository.deleteById(id);
        	}else {
        		throw new RuntimeException("El comentario tiene respuestas asociadas y no se puede eliminar.");
        	}
        } catch (Exception e) {
            logger.error(e);
            throw new ComentarioServiceException(ComentarioServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("ComentarioServiceImpl: Saliendo de borrarComentario...");
        return id;
    }

	@Override
	public List<ComentarioDTO> obtenerTodoPorPublicacion(Long idPublicacion) throws ComentarioServiceException {
        logger.debug("ComentarioServiceImpl: Ingresando a obtenerTodoPorPublicacion...");
        List<ComentarioDTO> listaDto = new ArrayList<>();

        try {
            List<ComentarioBO> boLista = comentarioRepository.findByPublicacionIdPublicacionOrderByPuntajeDesc(idPublicacion);

            for (ComentarioBO bo : boLista) {
                ComentarioDTO dto = comentarioMapper.toDTO(bo);
                listaDto.add(dto);
            }
        } catch (Exception e) {
            logger.error(e);
            throw new ComentarioServiceException(ComentarioServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("ComentarioServiceImpl: Saliendo de obtenerTodoPorPublicacion...");
        return listaDto;
	}

	@Override
	public Integer puntuarComentario(Long idComentario) throws ComentarioServiceException {
        logger.debug("ComentarioServiceImpl: Ingresando a puntuarComentario...");
        Integer puntajeActual = 0;

        try {
            Optional<ComentarioBO> opt = comentarioRepository.findById(idComentario);
            if (opt.isPresent()) {
            	ComentarioBO bo = opt.get();
            	puntajeActual = bo.getPuntaje() +1;
            	bo.setPuntaje(puntajeActual);
            	comentarioRepository.save(bo);
            	
            	publicacionService.notificarModificacion(bo.getPublicacion().getIdPublicacion());
            } else {
                throw new ComentarioServiceException("Entidad no encontrada");
            }
        } catch (Exception e) {
            logger.error(e);
            throw new ComentarioServiceException(ComentarioServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("ComentarioServiceImpl: Saliendo de puntuarComentario...");
		return puntajeActual;
	}


}
