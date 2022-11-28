package com.mao.stackerapi.controller.security;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mao.stackerapi.services.generic.ILoginService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping(value = "/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {
	
	private static final Logger logger = LogManager.getLogger(UsuarioController.class);

	@Autowired
	ILoginService loginService;

	@PutMapping(path = "/cambiar-imagen/{idLogin}")
	@Operation(summary = "Cambiar la imagen asociada al usuario actual")
	@ApiResponse(responseCode = "200", description = "Cambiar la imagen asociada al usuario actual", content = {
			@Content(mediaType = "application/json") })
	public ResponseEntity<?> cambiarImagen(@PathVariable Long idLogin, @RequestBody String nuevaImagenUrl) throws Exception {
		logger.debug(String.format("Entrando en %s", new Throwable().getStackTrace()[0].getMethodName()));
		
		String urlGuardada  = loginService.cambiarImagen(idLogin, nuevaImagenUrl);

		logger.debug(String.format("Saliendo de %s", new Throwable().getStackTrace()[0].getMethodName()));
		return ResponseEntity.ok().body(urlGuardada);
	}

}
