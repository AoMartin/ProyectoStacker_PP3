package com.mao.stackerapi.dto.api;

import com.mao.stackerapi.models.security.LoginBO;

public class ComentarioDTO {

	private Long idComentario;
	private Long idPublicacion;
	private Long idRespuesta;
	private String mensaje;
	private Integer puntaje;
	private String fechaHoraCreacion;
	private LoginBO usuario;
	

	public ComentarioDTO() {
		
	}


	public ComentarioDTO(Long idComentario, Long idPublicacion, Long idRespuesta, String mensaje, Integer puntaje,
			String fechaHoraCreacion, LoginBO usuario) {
		super();
		this.idComentario = idComentario;
		this.idPublicacion = idPublicacion;
		this.idRespuesta = idRespuesta;
		this.mensaje = mensaje;
		this.puntaje = puntaje;
		this.fechaHoraCreacion = fechaHoraCreacion;
		this.usuario = usuario;
	}


	public Long getIdComentario() {
		return idComentario;
	}


	public void setIdComentario(Long idComentario) {
		this.idComentario = idComentario;
	}


	public Long getIdPublicacion() {
		return idPublicacion;
	}


	public void setIdPublicacion(Long idPublicacion) {
		this.idPublicacion = idPublicacion;
	}


	public Long getIdRespuesta() {
		return idRespuesta;
	}


	public void setIdRespuesta(Long idRespuesta) {
		this.idRespuesta = idRespuesta;
	}


	public String getMensaje() {
		return mensaje;
	}


	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}


	public Integer getPuntaje() {
		return puntaje;
	}


	public void setPuntaje(Integer puntaje) {
		this.puntaje = puntaje;
	}


	public String getFechaHoraCreacion() {
		return fechaHoraCreacion;
	}


	public void setFechaHoraCreacion(String fechaHoraCreacion) {
		this.fechaHoraCreacion = fechaHoraCreacion;
	}


	public LoginBO getUsuario() {
		return usuario;
	}


	public void setUsuario(LoginBO usuario) {
		this.usuario = usuario;
	}


	@Override
	public String toString() {
		return "ComentarioDTO [idComentario=" + idComentario + ", idPublicacion=" + idPublicacion + ", idRespuesta="
				+ idRespuesta + ", mensaje=" + mensaje + ", puntaje=" + puntaje + ", fechaHoraCreacion="
				+ fechaHoraCreacion + "]";
	}

	
	
}
