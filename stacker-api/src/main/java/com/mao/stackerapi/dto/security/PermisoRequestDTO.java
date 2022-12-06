package com.mao.stackerapi.dto.security;

import com.mao.stackerapi.utils.Constantes.TipoPermisoUsuario;

public class PermisoRequestDTO {

	private Long admin; 
	private Long usuarioObjetivo;
	private TipoPermisoUsuario tipoPermiso;
	
	public PermisoRequestDTO() {
		
	}

	public PermisoRequestDTO(Long admin, Long usuarioObjetivo, TipoPermisoUsuario tipoPermiso) {
		super();
		this.admin = admin;
		this.usuarioObjetivo = usuarioObjetivo;
		this.tipoPermiso = tipoPermiso;
	}

	public Long getAdmin() {
		return admin;
	}

	public void setAdmin(Long admin) {
		this.admin = admin;
	}

	public Long getUsuarioObjetivo() {
		return usuarioObjetivo;
	}

	public void setUsuarioObjetivo(Long usuarioObjetivo) {
		this.usuarioObjetivo = usuarioObjetivo;
	}

	public TipoPermisoUsuario getTipoPermiso() {
		return tipoPermiso;
	}

	public void setTipoPermiso(TipoPermisoUsuario tipoPermiso) {
		this.tipoPermiso = tipoPermiso;
	}

	@Override
	public String toString() {
		return "PermisoRequestDTO [admin=" + admin + ", usuarioObjetivo=" + usuarioObjetivo + ", tipoPermiso="
				+ tipoPermiso + "]";
	}
	
	
}
