package com.mao.stackerapi.services.generic;

import com.mao.stackerapi.dto.security.PermisoRequestDTO;
import com.mao.stackerapi.models.security.PermisoBO;


public interface IPermisoService {
	
	public PermisoBO obtenerPermiso(PermisoRequestDTO req) throws Exception;
	
	public PermisoBO asignarPermiso(PermisoRequestDTO req) throws Exception;
	
	public PermisoBO borrarPermiso(PermisoRequestDTO req) throws Exception;
}
