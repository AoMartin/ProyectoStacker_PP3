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
@Table(name = "COMENTARIOS")
public class ComentarioBO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_COMENTARIO")
	private Long idComentario;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_PUBLICACION")
	private PublicacionBO publicacion;

	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_RESPUESTA")
	private ComentarioBO respuesta;
	
	@Column(name = "MENSAJE")
	private String mensaje;
	
	@Column(name = "PUNTAJE")
	private Integer puntaje;
	
	@Column(name = "FECHA_HORA_CREACION")
	private Timestamp fechaHoraCreacion;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_USUARIO")
	private LoginBO usuario;
	

	public ComentarioBO() {
		
	}


	public ComentarioBO(Long idComentario, PublicacionBO publicacion, ComentarioBO respuesta, String mensaje,
			Integer puntaje, Timestamp fechaHoraCreacion, LoginBO usuario) {
		super();
		this.idComentario = idComentario;
		this.publicacion = publicacion;
		this.respuesta = respuesta;
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


	public PublicacionBO getPublicacion() {
		return publicacion;
	}


	public void setPublicacion(PublicacionBO publicacion) {
		this.publicacion = publicacion;
	}


	public ComentarioBO getRespuesta() {
		return respuesta;
	}


	public void setRespuesta(ComentarioBO respuesta) {
		this.respuesta = respuesta;
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
		return "ComentarioBO [idComentario=" + idComentario + ", publicacion=" + publicacion + ", respuesta="
				+ respuesta + ", mensaje=" + mensaje + ", puntaje=" + puntaje + ", fechaHoraCreacion="
				+ fechaHoraCreacion + ", usuario=" + usuario + "]";
	}

	
}
