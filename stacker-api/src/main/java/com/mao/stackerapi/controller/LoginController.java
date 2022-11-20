package com.mao.stackerapi.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mao.stackerapi.dto.security.TokenResponseDTO;
import com.mao.stackerapi.dto.security.UserDTO;
import com.mao.stackerapi.services.generic.ILoginService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping(value = "/api/login")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LoginController {
	
	private static final Logger logger = LogManager.getLogger(LoginController.class);

	@Autowired
	ILoginService loginService;

	@PostMapping(path = "/autenticar-usuario")
	@Operation(summary = "Ingresa usuario y contraseña y se devuelve un token ")
	@ApiResponse(responseCode = "200", description = "Creacion de token para accesos restringidos", content = {
			@Content(mediaType = "application/json") })
	public ResponseEntity<?> authenticateUser(@RequestBody UserDTO userDto) throws Exception {
		logger.debug(String.format("Entrando en %s", new Throwable().getStackTrace()[0].getMethodName()));
		
		TokenResponseDTO tokenDTO = loginService.autenticarUser(userDto);

		logger.debug(String.format("Saliendo de %s", new Throwable().getStackTrace()[0].getMethodName()));
		return ResponseEntity.ok().body(tokenDTO);
	}

}
