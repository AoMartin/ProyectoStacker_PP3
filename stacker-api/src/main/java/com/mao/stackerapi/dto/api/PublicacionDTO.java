package com.mao.stackerapi.dto.api;

import com.mao.stackerapi.models.security.LoginBO;


public class PublicacionDTO {

	private Long idPublicacion;
	private String titulo;
	private String imagen;
	private String descripcion;
	private Integer puntaje;
	private String fechaHoraCreacion;
	private LoginBO usuario;
	
	public PublicacionDTO() {
		
	}

	public PublicacionDTO(Long idPublicacion, String titulo, String imagen, String descripcion, Integer puntaje,
			String fechaHoraCreacion, LoginBO usuario) {
		super();
		this.idPublicacion = idPublicacion;
		this.titulo = titulo;
		this.imagen = imagen;
		this.descripcion = descripcion;
		this.puntaje = puntaje;
		this.fechaHoraCreacion = fechaHoraCreacion;
		this.usuario = usuario;
	}

	public Long getIdPublicacion() {
		return idPublicacion;
	}

	public void setIdPublicacion(Long idPublicacion) {
		this.idPublicacion = idPublicacion;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
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
		return "PublicacionDTO [idPublicacion=" + idPublicacion + ", titulo=" + titulo + ", imagen=" + imagen
				+ ", descripcion=" + descripcion + ", puntaje=" + puntaje + ", fechaHoraCreacion=" + fechaHoraCreacion
				+ ", usuario=" + usuario + "]";
	}

	
	
}
