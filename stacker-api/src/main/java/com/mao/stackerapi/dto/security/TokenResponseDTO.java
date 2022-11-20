package com.mao.stackerapi.dto.security;

/**
 * <p>
 * 	Dto con la respuesta al servicio de login, devuelve el token jwt generado
 * </p>
 * 
 * @author molsson
 * @since 20/11/2022
 */

public class TokenResponseDTO {

	private String token;
	private String userName;

	public TokenResponseDTO() {
	}

	public TokenResponseDTO(String token, String userName) {
		this.token = token;
		this.userName = userName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	
}
