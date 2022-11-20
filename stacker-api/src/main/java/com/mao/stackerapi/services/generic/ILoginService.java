package com.mao.stackerapi.services.generic;

import com.mao.stackerapi.dto.security.TokenResponseDTO;
import com.mao.stackerapi.dto.security.UserDTO;

/**
 * <p>
 * Verifica que el usuario sea valido
 * </p>
 *
 * @return ResponseEntity<?>
 * 
 * @author molsson
 * @version 1.0
 * @since 20/11/2022
 */

public interface ILoginService {
	
	/**
	 * <p>
	 * Autenticacion de usuario y generacion de token
	 * </p>
	 * 
	 * @param userDto
	 * @return TokenResponseDTO
	 * 
	 * @author molsson
	 * @version 1.0
	 * @since 20/11/2022
	 */
	public TokenResponseDTO autenticarUser(UserDTO userDto) ;

}
