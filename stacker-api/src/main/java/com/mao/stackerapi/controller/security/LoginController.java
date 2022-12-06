package com.mao.stackerapi.controller.security;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mao.stackerapi.dto.api.PublicacionDTO;
import com.mao.stackerapi.dto.security.TokenResponseDTO;
import com.mao.stackerapi.dto.security.UserDTO;
import com.mao.stackerapi.models.security.LoginBO;
import com.mao.stackerapi.services.generic.ILoginService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping(value = "/login")
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
		TokenResponseDTO tokenDTO = null;
		
		try {			
			tokenDTO = loginService.autenticarUser(userDto);
		}catch(Exception e) {
			return ResponseEntity.internalServerError().body(e.getMessage());
		}

		logger.debug(String.format("Saliendo de %s", new Throwable().getStackTrace()[0].getMethodName()));
		return ResponseEntity.ok().body(tokenDTO);
	}

	@GetMapping(value = "/buscar/{buscar}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Operation(summary = "Busca los usuarios que coincidad por el nombre")
	@ApiResponse(responseCode = "200", description = "Busca los usuarios que coincidad por el nombre", content = {
			@Content(mediaType = "application/json") })
	public ResponseEntity<List<LoginBO>> buscar(@PathVariable String buscar) throws Exception {
		logger.debug("LoginController: Ingresando a buscar...");
		List<LoginBO> lista = null;
		
		lista = loginService.buscarUsuario(buscar.toString());
		
		logger.debug("LoginController: Saliendo de buscar...");
		return ResponseEntity.ok().body(lista);
	}
}
