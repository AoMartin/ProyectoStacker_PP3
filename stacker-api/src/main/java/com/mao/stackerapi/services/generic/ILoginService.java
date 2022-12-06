package com.mao.stackerapi.services.generic;

import java.util.List;

import com.mao.stackerapi.dto.security.TokenResponseDTO;
import com.mao.stackerapi.dto.security.UserDTO;
import com.mao.stackerapi.models.security.LoginBO;


public interface ILoginService {
	
	public TokenResponseDTO autenticarUser(UserDTO userDto) ;

	public String cambiarImagen(Long idLogin, String nuevaImagen);
	
	public List<LoginBO> buscarUsuario(String nombre);
}
