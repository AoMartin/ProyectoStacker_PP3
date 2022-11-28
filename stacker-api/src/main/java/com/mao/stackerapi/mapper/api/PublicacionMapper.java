package com.mao.stackerapi.mapper.api;

import java.sql.Timestamp;

import org.springframework.stereotype.Component;

import com.mao.stackerapi.dto.api.PublicacionDTO;
import com.mao.stackerapi.mapper.generic.IGenericMapper;
import com.mao.stackerapi.models.api.PublicacionBO;
import com.mao.stackerapi.models.security.LoginBO;

/**
 * <p>
 * Mapeo de entidad entre PublicacionDTO y PublicacionBO
 * </p>
 *
 * @author molsson
 * @since 20/11/2022
 */
@Component
public class PublicacionMapper implements IGenericMapper<PublicacionDTO,PublicacionBO> {

	@Override
	public PublicacionDTO toDTO(PublicacionBO bo) {
		if ( bo == null ) {
            return null;
        }
		
		PublicacionDTO dto = new PublicacionDTO();
		
		dto.setIdPublicacion(bo.getIdPublicacion());
		dto.setTitulo(bo.getTitulo());
		dto.setImagen(bo.getImagen());
		dto.setDescripcion(bo.getDescripcion());
		dto.setPuntaje(bo.getPuntaje());
		
		String fechaHoraCreacion = null;
		if (null != bo.getFechaHoraCreacion()) {
			fechaHoraCreacion = bo.getFechaHoraCreacion().toString();
		}else {
			fechaHoraCreacion = new Timestamp(System.currentTimeMillis()).toString();
		}
		dto.setFechaHoraCreacion(fechaHoraCreacion);
		
		dto.setUsuario(bo.getUsuario());
		
		return dto;
	}

	@Override
	public PublicacionBO fromDTO(PublicacionDTO dto) {
		if ( dto == null ) {
            return null;
        }
		
		PublicacionBO bo = new PublicacionBO();
		
		bo.setIdPublicacion(dto.getIdPublicacion());
		bo.setTitulo(dto.getTitulo());
		bo.setImagen(dto.getImagen());
		bo.setDescripcion(dto.getDescripcion());
		bo.setPuntaje(dto.getPuntaje());
		
		Timestamp fechaHoraCreacion = null;
		if (null != dto.getFechaHoraCreacion()) {
			fechaHoraCreacion = Timestamp.valueOf(dto.getFechaHoraCreacion());
		}else {
			fechaHoraCreacion = new Timestamp(System.currentTimeMillis());
		}
		bo.setFechaHoraCreacion(fechaHoraCreacion);
		
		LoginBO usuario = null;
		if(null != dto.getUsuario()) {
			usuario = dto.getUsuario();
		}
		bo.setUsuario(usuario);
		
		return bo;
	}

}
