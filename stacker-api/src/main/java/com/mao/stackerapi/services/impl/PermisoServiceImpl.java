package com.mao.stackerapi.services.impl;

import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mao.stackerapi.dto.security.PermisoRequestDTO;
import com.mao.stackerapi.models.security.PermisoBO;
import com.mao.stackerapi.repository.security.IPermisoRepository;
import com.mao.stackerapi.services.generic.IPermisoService;
import com.mao.stackerapi.utils.Constantes.TipoPermisoUsuario;

@Service
public class PermisoServiceImpl implements IPermisoService {

	private static final Logger logger = LogManager.getLogger(PermisoServiceImpl.class);

	@Autowired
	IPermisoRepository permisoRepository;

	@Override
	public PermisoBO obtenerPermiso(PermisoRequestDTO req ) throws Exception {
        logger.debug("PermisoServiceImpl: Ingresando a obtenerPermiso...");
        PermisoBO res = null;

        Long objetivo = req.getUsuarioObjetivo();
        
        try {
        	Optional<PermisoBO> opt = permisoRepository.findById(objetivo);
            if(!opt.isEmpty()) {
            	res = opt.get();
            }
        } catch (Exception e) {
            logger.error(e);
            throw new Exception("Fallo al obtener permiso.");
        }

        logger.debug("PermisoServiceImpl: Saliendo de obtenerPermiso...");
        return res;
	}

	@Override
	public PermisoBO asignarPermiso(PermisoRequestDTO req) throws Exception {
        logger.debug("PermisoServiceImpl: Ingresando a asignarPermiso...");
        PermisoBO res = new PermisoBO();

        Long admin = req.getAdmin();
        Long objetivo = req.getUsuarioObjetivo();
        TipoPermisoUsuario tipoPermiso = req.getTipoPermiso();
        
        try {
           	PermisoRequestDTO permisoReq1 = new PermisoRequestDTO(null,admin,null);
        	PermisoBO permisoUsuario = obtenerPermiso(permisoReq1);
    		
			if(null != permisoUsuario) {
				if(permisoUsuario.getTipoPermiso().equals(TipoPermisoUsuario.ADMIN)||
						permisoUsuario.getTipoPermiso().equals(TipoPermisoUsuario.MOD)) {
					PermisoBO permisoNuevo = new PermisoBO(objetivo, tipoPermiso);
					res = permisoRepository.save(permisoNuevo);
				}else {					
					throw new RuntimeException("Solo un admin puede realizar la accion solicitada.");
				}
			}
			
        } catch (Exception e) {
            logger.error(e);
            throw new Exception("Fallo al asignar permiso.");
        }

        logger.debug("PermisoServiceImpl: Saliendo de asignarPermiso...");
        return res;
	}

	@Override
	public PermisoBO borrarPermiso(PermisoRequestDTO req) throws Exception {
        logger.debug("PermisoServiceImpl: Ingresando a borrarPermiso...");
        PermisoBO res = new PermisoBO();

        Long admin = req.getAdmin();
        Long objetivo = req.getUsuarioObjetivo();
        
        try {

        	PermisoRequestDTO permisoReq1 = new PermisoRequestDTO(null,admin,null);
        	PermisoBO permisoUsuario = obtenerPermiso(permisoReq1);
    		
			if(null != permisoUsuario) {
				if(permisoUsuario.getTipoPermiso().equals(TipoPermisoUsuario.ADMIN)) {
					PermisoRequestDTO permisoReq2 = new PermisoRequestDTO(null,objetivo,null);
					PermisoBO permisoObjetivo = obtenerPermiso(permisoReq2);
					permisoRepository.delete(permisoObjetivo);
				}else {					
					throw new RuntimeException("Solo un admin puede realizar la accion solicitada.");
				}
			}
			
        } catch (Exception e) {
            logger.error(e);
            throw new Exception("Fallo al eliminar permiso.");
        }

        logger.debug("PermisoServiceImpl: Saliendo de borrarPermiso...");
        return res;
	}

	

}


