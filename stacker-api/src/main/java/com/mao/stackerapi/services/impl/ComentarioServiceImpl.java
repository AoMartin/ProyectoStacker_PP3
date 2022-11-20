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
            comentarioRepository.deleteById(id);
        } catch (Exception e) {
            logger.error(e);
            throw new ComentarioServiceException(ComentarioServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("ComentarioServiceImpl: Saliendo de borrarComentario...");
        return id;
    }


}
