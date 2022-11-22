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

import com.mao.stackerapi.dto.api.ComentarioDTO;
import com.mao.stackerapi.services.generic.IComentarioService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/comentario")
public class ComentarioController  {

	private static final Logger logger = LogManager.getLogger(ComentarioController.class);

	@Autowired
	private IComentarioService comentarioService;


	@GetMapping(value = "/obtener/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo obtenerComentario", notes = "Solicita todos los datos de una comentario para el ID indicado", httpMethod = "GET")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = ComentarioDTO.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<ComentarioDTO> obtenerComentario(@PathVariable Long id) throws Exception {
		logger.debug("ComentarioController: Ingresando a obtenerComentario...");
		ComentarioDTO dto = null;

		dto = comentarioService.obtenerComentario(id);

		logger.debug("ComentarioController: Saliendo de obtenerComentario...");
		return ResponseEntity.ok().body(dto);
	}


	@GetMapping(value = "/obtener-todos", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo obtenerTodosComentario", notes = "Solicita todos los datos de comentario cargados en la base de datos", httpMethod = "GET")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = ComentarioDTO.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<List<ComentarioDTO>> obtenerTodosComentario() throws Exception {
		logger.debug("ComentarioController: Ingresando a obtenerTodosComentario...");
		List<ComentarioDTO> lista = null;

		lista = comentarioService.obtenerTodoComentario();

		logger.debug("ComentarioController: Saliendo de obtenerTodosComentario...");
		return ResponseEntity.ok().body(lista);
	}


	@PostMapping(value = "/guardar", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo guardarComentario", notes = "Guarda los datos de comentario cargados en la base de datos", httpMethod = "POST")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = ComentarioDTO.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<ComentarioDTO> guardarComentario(@RequestBody ComentarioDTO comentario) throws Exception {
		logger.debug("ComentarioController: Ingresando a guardarComentario...");
		ComentarioDTO dto = null;

		dto = comentarioService.guardarComentario(comentario);

		logger.debug("ComentarioController: Saliendo de guardarComentario...");
		return ResponseEntity.ok().body(dto);
	}


	@PutMapping(value = "/actualizar", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo actualizarComentario", notes = "Actualiza los datos de comentario cargados en la base de datos", httpMethod = "PUT")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = ComentarioDTO.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<ComentarioDTO> actualizarComentario(@RequestBody ComentarioDTO comentario) throws Exception {
		logger.debug("ComentarioController: Ingresando a actualizarComentario...");
		ComentarioDTO dto = null;

		dto = comentarioService.actualizarComentario(comentario);

		logger.debug("ComentarioController: Saliendo de actualizarComentario...");
		return ResponseEntity.ok().body(dto);
	}



	@DeleteMapping(value = "/borrar/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Metodo borrarComentario", notes = "Borra los datos de comentario en la base de datos para el ID indicado", httpMethod = "DELETE")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = Long.class),
			@ApiResponse(code = 400, message = ""), @ApiResponse(code = 500, message = "") })
	public ResponseEntity<Long> borrarComentario(@PathVariable Long id) throws Exception {
		logger.debug("ComentarioMicroservicioController: Ingresando a borrarComentario...");
		Long idBorrado = null;

		idBorrado = comentarioService.borrarComentario(id);

		logger.debug("ComentarioMicroservicioController: Saliendo de borrarComentario...");
		return ResponseEntity.ok().body(idBorrado);
	}


}
