package com.mao.stackerapi.models.security;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.mao.stackerapi.utils.Constantes.TipoPermisoUsuario;

@Entity
@Table(name = "PERMISOS")
public class PermisoBO {

	@Id
    @JoinColumn(name = "USUARIO")
	private Long usuario;

	@Column(name = "TIPO_PERMISO")
	private TipoPermisoUsuario tipoPermiso;
	
	public PermisoBO() {
		
	}

	public PermisoBO( Long usuario, TipoPermisoUsuario tipoPermiso) {
		super();
		this.usuario = usuario;
		this.tipoPermiso = tipoPermiso;
	}

	public Long getUsuario() {
		return usuario;
	}

	public void setUsuario(Long usuario) {
		this.usuario = usuario;
	}

	public TipoPermisoUsuario getTipoPermiso() {
		return tipoPermiso;
	}

	public void setTipoPermiso(TipoPermisoUsuario tipoPermiso) {
		this.tipoPermiso = tipoPermiso;
	}

	@Override
	public String toString() {
		return "PermisoBO [usuario=" + usuario + ", tipoPermiso=" + tipoPermiso + "]";
	}
	
	
}
