package com.mao.stackerapi.services.impl;

import java.sql.Timestamp;
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
    public PublicacionDTO guardarPublicacion(PublicacionDTO publicacionDTO) throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a guardarPublicacion...");
        PublicacionDTO dto = null;

        try {
            PublicacionBO bo = publicacionMapper.fromDTO(publicacionDTO);
            bo.setUltimaActualizacion(new Timestamp(System.currentTimeMillis()));
            
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
            bo.setUltimaActualizacion(new Timestamp(System.currentTimeMillis()));
            
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

	@Override
	public List<PublicacionDTO> obtenerTodoPublicacionPuntaje() throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a obtenerTodoPublicacionPuntaje...");
        List<PublicacionDTO> listaDto = new ArrayList<>();

        try {
            List<PublicacionBO> boLista = publicacionRepository.findAllByOrderByPuntaje();

            for (PublicacionBO bo : boLista) {
                PublicacionDTO dto = publicacionMapper.toDTO(bo);
                listaDto.add(dto);
            }
        } catch (Exception e) {
            logger.error(e);
            throw new PublicacionServiceException(PublicacionServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("PublicacionServiceImpl: Saliendo de obtenerTodoPublicacionPuntaje...");
        return listaDto;
	}

	@Override
	public List<PublicacionDTO> obtenerTodoPublicacionHoraCreacion() throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a obtenerTodoPublicacionHoraCreacion...");
        List<PublicacionDTO> listaDto = new ArrayList<>();

        try {
            List<PublicacionBO> boLista = publicacionRepository.findAllByOrderByFechaHoraCreacionDesc();

            for (PublicacionBO bo : boLista) {
                PublicacionDTO dto = publicacionMapper.toDTO(bo);
                listaDto.add(dto);
            }
        } catch (Exception e) {
            logger.error(e);
            throw new PublicacionServiceException(PublicacionServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("PublicacionServiceImpl: Saliendo de obtenerTodoPublicacionHoraCreacion...");
        return listaDto;
	}

	@Override
	public List<PublicacionDTO> obtenerTodoPublicacionUltimaActualizacion() throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a obtenerTodoPublicacionUltimaActualizacion...");
        List<PublicacionDTO> listaDto = new ArrayList<>();

        try {
            List<PublicacionBO> boLista = publicacionRepository.findAllByOrderByUltimaActualizacionDesc();

            for (PublicacionBO bo : boLista) {
                PublicacionDTO dto = publicacionMapper.toDTO(bo);
                listaDto.add(dto);
            }
        } catch (Exception e) {
            logger.error(e);
            throw new PublicacionServiceException(PublicacionServiceException.DEFAULT_MESSAGE + e.getMessage());
        }

        logger.debug("PublicacionServiceImpl: Saliendo de obtenerTodoPublicacionUltimaActualizacion...");
        return listaDto;
	}

	@Override
	public Boolean notificarModificacion(Long idPublicacion) throws PublicacionServiceException {
        logger.debug("PublicacionServiceImpl: Ingresando a obtenerTodoPublicacionUltimaActualizacion...");
        Boolean res = Boolean.TRUE;

        try {
            Optional<PublicacionBO> publicacionOpt = publicacionRepository.findById(idPublicacion);

            if(publicacionOpt.isPresent()) {
            	PublicacionBO publicacion = publicacionOpt.get();
            	publicacion.setUltimaActualizacion(new Timestamp(System.currentTimeMillis()));
            	publicacionRepository.save(publicacion);
            }else {
            	throw new PublicacionServiceException("PublicacionService: entidad no encontrada.");
            }
        } catch (Exception e) {
            logger.error(e);
            res = Boolean.FALSE;
        }

        logger.debug("PublicacionServiceImpl: Saliendo de obtenerTodoPublicacionUltimaActualizacion...");
        return res;
	}


}
