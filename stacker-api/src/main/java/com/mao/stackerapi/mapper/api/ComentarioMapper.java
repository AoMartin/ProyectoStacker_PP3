package com.mao.stackerapi.mapper.api;

import java.sql.Timestamp;

import org.springframework.stereotype.Component;

import com.mao.stackerapi.dto.api.ComentarioDTO;
import com.mao.stackerapi.mapper.generic.IGenericMapper;
import com.mao.stackerapi.models.api.ComentarioBO;
import com.mao.stackerapi.models.api.PublicacionBO;
import com.mao.stackerapi.models.security.LoginBO;

/**
 * <p>
 * Mapeo de entidad entre ComentarioDTO y ComentarioBO
 * </p>
 *
 * @author molsson
 * @since 20/11/2022
 */
@Component
public class ComentarioMapper implements IGenericMapper<ComentarioDTO,ComentarioBO> {

	@Override
	public ComentarioDTO toDTO(ComentarioBO bo) {
		if ( bo == null ) {
            return null;
        }
		
		ComentarioDTO dto = new ComentarioDTO();
		dto.setIdComentario(bo.getIdComentario());
		dto.setIdPublicacion(bo.getPublicacion().getIdPublicacion());
		if(null != bo.getRespuesta()) {			
			dto.setIdRespuesta(bo.getRespuesta().getIdComentario());
		}
		dto.setMensaje(bo.getMensaje());
		dto.setPuntaje(bo.getPuntaje());
		dto.setUsuario(bo.getUsuario());
		
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
	public ComentarioBO fromDTO(ComentarioDTO dto) {
		if ( dto == null ) {
            return null;
        }
		
		ComentarioBO bo = new ComentarioBO();
		bo.setIdComentario(dto.getIdComentario());

		PublicacionBO publicacion = null;
		if(null != dto.getIdPublicacion()) {
			publicacion = new PublicacionBO();
			publicacion.setIdPublicacion(dto.getIdPublicacion());
		}
		bo.setPublicacion(publicacion);
		
		ComentarioBO respuesta = null;
		if(null != dto.getIdRespuesta()) {
			respuesta = new ComentarioBO();
			respuesta.setIdComentario(dto.getIdRespuesta());			
		}
		bo.setRespuesta(respuesta);
		
		bo.setMensaje(dto.getMensaje());
		bo.setPuntaje(dto.getPuntaje());
		
		LoginBO usuario = null;
		if(null != dto.getUsuario()) {
			usuario = dto.getUsuario();
		}
		bo.setUsuario(usuario);
		
		Timestamp fechaHoraCreacion = null;
		if (null != dto.getFechaHoraCreacion()) {
			fechaHoraCreacion = Timestamp.valueOf(dto.getFechaHoraCreacion());
		}else {
			fechaHoraCreacion = new Timestamp(System.currentTimeMillis());
		}
		bo.setFechaHoraCreacion(fechaHoraCreacion);
		
		
		return bo;
	}

}
