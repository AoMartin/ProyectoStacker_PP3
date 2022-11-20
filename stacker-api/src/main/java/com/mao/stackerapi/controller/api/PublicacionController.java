package com.mao.stackerapi.controller.api;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mao.stackerapi.dto.api.PublicacionDTO;
import com.mao.stackerapi.services.generic.IPublicacionService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/api/v1/publicacion")
public class PublicacionController  {

	private static final Logger logger = LogManager.getLogger(PublicacionController.class);

	@Autowired
	private IPublicacionService publicacionService;


	@GetMapping(value = "/obtener/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo obtenerPublicacion", notes = "Solicita todos los datos de una publicacion para el ID indicado", httpMethod = "GET")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = PublicacionDTO.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<PublicacionDTO> obtenerPublicacion(@PathVariable Long id) throws Exception {
		logger.debug("PublicacionController: Ingresando a obtenerPublicacion...");
		PublicacionDTO dto = null;

		dto = publicacionService.obtenerPublicacion(id);

		logger.debug("PublicacionController: Saliendo de obtenerPublicacion...");
		return ResponseEntity.ok().body(dto);
	}


	@GetMapping(value = "/obtener-todos", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo obtenerTodosPublicacion", notes = "Solicita todos los datos de publicacion cargados en la base de datos", httpMethod = "GET")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = PublicacionDTO.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<List<PublicacionDTO>> obtenerTodosPublicacion() throws Exception {
		logger.debug("PublicacionController: Ingresando a obtenerTodosPublicacion...");
		List<PublicacionDTO> lista = null;

		lista = publicacionService.obtenerTodoPublicacion();

		logger.debug("PublicacionController: Saliendo de obtenerTodosPublicacion...");
		return ResponseEntity.ok().body(lista);
	}


	@PostMapping(value = "/guardar", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo guardarPublicacion", notes = "Guarda los datos de publicacion cargados en la base de datos", httpMethod = "POST")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = PublicacionDTO.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<PublicacionDTO> guardarPublicacion(@RequestBody PublicacionDTO publicacion) throws Exception {
		logger.debug("PublicacionController: Ingresando a guardarPublicacion...");
		PublicacionDTO dto = null;

		dto = publicacionService.guardarPublicacion(publicacion);

		logger.debug("PublicacionController: Saliendo de guardarPublicacion...");
		return ResponseEntity.ok().body(dto);
	}


	@PutMapping(value = "/actualizar", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo actualizarPublicacion", notes = "Actualiza los datos de publicacion cargados en la base de datos", httpMethod = "PUT")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = PublicacionDTO.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<PublicacionDTO> actualizarPublicacion(@RequestBody PublicacionDTO publicacion) throws Exception {
		logger.debug("PublicacionController: Ingresando a actualizarPublicacion...");
		PublicacionDTO dto = null;

		dto = publicacionService.actualizarPublicacion(publicacion);

		logger.debug("PublicacionController: Saliendo de actualizarPublicacion...");
		return ResponseEntity.ok().body(dto);
	}



	@DeleteMapping(value = "/borrar/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo borrarPublicacion", notes = "Borra los datos de publicacion en la base de datos para el ID indicado", httpMethod = "DELETE")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = Long.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<Long> borrarPublicacion(@PathVariable Long id) throws Exception {
		logger.debug("PublicacionMicroservicioController: Ingresando a borrarPublicacion...");
		Long idBorrado = null;

		idBorrado = publicacionService.borrarPublicacion(id);

		logger.debug("PublicacionMicroservicioController: Saliendo de borrarPublicacion...");
		return ResponseEntity.ok().body(idBorrado);
	}


}
