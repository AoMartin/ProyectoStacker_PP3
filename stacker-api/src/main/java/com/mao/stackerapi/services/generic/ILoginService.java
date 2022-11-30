package com.mao.stackerapi.services.generic;

import com.mao.stackerapi.dto.security.TokenResponseDTO;
import com.mao.stackerapi.dto.security.UserDTO;


public interface ILoginService {
	
	public TokenResponseDTO autenticarUser(UserDTO userDto) ;

	public String cambiarImagen(Long idLogin, String nuevaImagen);
}
