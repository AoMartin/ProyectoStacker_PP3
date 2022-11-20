package com.mao.stackerapi.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mao.stackerapi.dto.api.PublicacionDTO;
import com.mao.stackerapi.exceptions.api.PublicacionServiceException;
import com.mao.stackerapi.mapper.api.PublicacionMapper;
import com.mao.stackerapi.models.api.PublicacionBO;
import com.mao.stackerapi.repository.api.IPublicacionRepository;
import com.mao.stackerapi.services.generic.IPublicacionService;

/**
 * <p>
 * Implementacion de Services de Publicacion
 * </p>
 *
 * @since 20/11/2022
 * @author molsson
 */
@Service
public class PublicacionServiceImpl implements IPublicacionService {

    private static final Logger logger = LogManager.getLogger(PublicacionServiceImpl.class);

    @Autowired
    private PublicacionMapper publicacionMapper;

    @Autowired
    private IPublicacionRepository publicacionRepository;

    @Override
    public PublicacionDTO obtenerPublicacion(Long id) throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a obtenerPublicacion...");
        PublicacionDTO dto = new PublicacionDTO();

        try {
            Optional<PublicacionBO> bo = publicacionRepository.findById(id);
            if (!bo.isPresent()) {
                throw new PublicacionServiceException(PublicacionServiceException.NO_ENCONTRADO);
            } else {
                dto = publicacionMapper.toDTO(bo.get());
            }
        } catch (Exception e) {
            logger.error(e);
            throw new PublicacionServiceException(PublicacionServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("PublicacionServiceImpl: Saliendo de obtenerPublicacion...");
        return dto;
    }

    @Override
    public List<PublicacionDTO> obtenerTodoPublicacion() throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a obtenerTodoPublicacion...");
        List<PublicacionDTO> listaDto = new ArrayList<>();

        try {
            List<PublicacionBO> boLista = publicacionRepository.findAll();

            for (PublicacionBO bo : boLista) {
                PublicacionDTO dto = publicacionMapper.toDTO(bo);
                listaDto.add(dto);
            }
        } catch (Exception e) {
            logger.error(e);
            throw new PublicacionServiceException(PublicacionServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("PublicacionServiceImpl: Saliendo de obtenerTodoPublicacion...");
        return listaDto;
    }

    @Override
    public PublicacionDTO guardarPublicacion(PublicacionDTO publicacionDTO) throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a guardarPublicacion...");
        PublicacionDTO dto = null;

        try {
            PublicacionBO bo = publicacionMapper.fromDTO(publicacionDTO);

            PublicacionBO guardado = publicacionRepository.save(bo);
            dto = publicacionMapper.toDTO(guardado);
        } catch (Exception e) {
            logger.error(e);
            throw new PublicacionServiceException(PublicacionServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("PublicacionServiceImpl: Saliendo de guardarPublicacion...");
        return dto;
    }

    @Override
    public PublicacionDTO actualizarPublicacion(PublicacionDTO publicacionDTO) throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a actualizarPublicacion...");
        PublicacionDTO dto = null;

        try {
            PublicacionBO bo = publicacionMapper.fromDTO(publicacionDTO);

            PublicacionBO guardado = publicacionRepository.save(bo);
            dto = publicacionMapper.toDTO(guardado);
        } catch (Exception e) {
            logger.error(e);
            throw new PublicacionServiceException(PublicacionServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("PublicacionServiceImpl: Saliendo de actualizarPublicacion...");
        return dto;
    }

    @Override
    public Long borrarPublicacion(Long id) throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a borrarPublicacion...");

        try {
            publicacionRepository.deleteById(id);
        } catch (Exception e) {
            logger.error(e);
            throw new PublicacionServiceException(PublicacionServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("PublicacionServiceImpl: Saliendo de borrarPublicacion...");
        return id;
    }


}
