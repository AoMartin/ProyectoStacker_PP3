package com.mao.stackerapi.controller.security;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mao.stackerapi.dto.security.PermisoRequestDTO;
import com.mao.stackerapi.models.security.PermisoBO;
import com.mao.stackerapi.services.generic.IPermisoService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping(value = "/permiso")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PermisoController {
	
	private static final Logger logger = LogManager.getLogger(PermisoController.class);

	@Autowired
	IPermisoService permisoService;

	@PutMapping(path = "/asignar")
	@Operation(summary = "Cambiar la imagen asociada al usuario actual")
	@ApiResponse(responseCode = "200", description = "Asigna un permiso a un usuario", content = {
			@Content(mediaType = "application/json") })
	public ResponseEntity<?> asignar(@RequestBody PermisoRequestDTO dto) throws Exception {
		logger.debug(String.format("Entrando en %s", new Throwable().getStackTrace()[0].getMethodName()));
		
		PermisoBO res =permisoService.asignarPermiso(dto);
		
		logger.debug(String.format("Saliendo de %s", new Throwable().getStackTrace()[0].getMethodName()));
		return ResponseEntity.ok().body(res);
	}

	@DeleteMapping(path = "/borrar")
	@Operation(summary = "Cambiar la imagen asociada al usuario actual")
	@ApiResponse(responseCode = "200", description = "Borra un permiso asignado a un usuario", content = {
			@Content(mediaType = "application/json") })
	public ResponseEntity<?> borrar(@RequestBody PermisoRequestDTO dto) throws Exception {
		logger.debug(String.format("Entrando en %s", new Throwable().getStackTrace()[0].getMethodName()));
		
		PermisoBO res =permisoService.borrarPermiso(dto);
		
		logger.debug(String.format("Saliendo de %s", new Throwable().getStackTrace()[0].getMethodName()));
		return ResponseEntity.ok().body(res);
	}
}
