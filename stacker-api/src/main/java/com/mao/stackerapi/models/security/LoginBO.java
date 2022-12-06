package com.mao.stackerapi.models.security;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.mao.stackerapi.utils.Constantes.TipoPermisoUsuario;

/**
 * <p>
 * Entidad que refiere a la tabla LOGIN
 * </p>
 *
 * @author molsson
 * @since 20/11/2022
 */

@Entity
@Table(name = "LOGIN")
public class LoginBO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_LOGIN")
	private Long idLogin;

	@Column(name = "USER")
	private String user;

	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "IMAGEN_URL", length = 2048)
	private String imagenUrl;

	@Column(name = "FECHA_HORA_CREACION")
	private Timestamp fechaHoraCreacion;
	
	@Column(name = "ULTIMO_LOGIN")
	private Timestamp ultimoLogin;

	@Transient
	private TipoPermisoUsuario tipoPermiso;
	
	public LoginBO() {

	}

	public LoginBO(Long idLogin, String user, String password, String imagenUrl, Timestamp fechaHoraCreacion,
			Timestamp ultimoLogin ) {
		super();
		this.idLogin = idLogin;
		this.user = user;
		this.password = password;
		this.imagenUrl = imagenUrl;
		this.fechaHoraCreacion = fechaHoraCreacion;
		this.ultimoLogin = ultimoLogin;
	}

	public Long getIdLogin() {
		return idLogin;
	}

	public void setIdLogin(Long idLogin) {
		this.idLogin = idLogin;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getImagenUrl() {
		return imagenUrl;
	}

	public void setImagenUrl(String imagenUrl) {
		this.imagenUrl = imagenUrl;
	}

	public Timestamp getFechaHoraCreacion() {
		return fechaHoraCreacion;
	}

	public void setFechaHoraCreacion(Timestamp fechaHoraCreacion) {
		this.fechaHoraCreacion = fechaHoraCreacion;
	}

	public Timestamp getUltimoLogin() {
		return ultimoLogin;
	}

	public void setUltimoLogin(Timestamp ultimoLogin) {
		this.ultimoLogin = ultimoLogin;
	}

	
	public TipoPermisoUsuario getTipoPermiso() {
		return tipoPermiso;
	}

	public void setTipoPermiso(TipoPermisoUsuario tipoPermiso) {
		this.tipoPermiso = tipoPermiso;
	}

	@Override
	public String toString() {
		return "LoginBO [idLogin=" + idLogin + ", user=" + user + ", password=" + password + ", imagenUrl=" + imagenUrl
				+ ", fechaHoraCreacion=" + fechaHoraCreacion + ", ultimoLogin=" + ultimoLogin + ", tipoPermiso="
				+ tipoPermiso + "]";
	}

	

}
