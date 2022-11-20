package com.mao.stackerapi.models.api;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.mao.stackerapi.models.security.LoginBO;

@Entity
@Table(name = "PUBLICACIONES")
public class PublicacionBO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_PUBLICACION")
	private Long idPublicacion;
	
	@Column(name = "TITULO")
	private String titulo;
	
	@Column(name = "IMAGEN")
	private String imagen;
	
	@Column(name = "DESCRIPCION")
	private String descripcion;
	
	@Column(name = "PUNTAJE")
	private Integer puntaje;
	
	@Column(name = "FECHA_HORA_CREACION")
	private Timestamp fechaHoraCreacion;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_USUARIO")
	private LoginBO usuario;
	
	public PublicacionBO() {
		
	}

	public PublicacionBO(Long idPublicacion, String titulo, String imagen, String descripcion, Integer puntaje,
			Timestamp fechaHoraCreacion, LoginBO usuario) {
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

	public Timestamp getFechaHoraCreacion() {
		return fechaHoraCreacion;
	}

	public void setFechaHoraCreacion(Timestamp fechaHoraCreacion) {
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
		return "PublicacionBO [idPublicacion=" + idPublicacion + ", titulo=" + titulo + ", imagen=" + imagen
				+ ", descripcion=" + descripcion + ", puntaje=" + puntaje + ", fechaHoraCreacion=" + fechaHoraCreacion
				+ ", usuario=" + usuario + "]";
	}
	
	
}
