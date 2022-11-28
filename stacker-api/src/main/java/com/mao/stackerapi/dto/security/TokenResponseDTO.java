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

	private Long id;
	private String token;
	private String userName;
	private String img;
	private String lastLoginDate;

	public TokenResponseDTO() {
	}

	public TokenResponseDTO(Long id, String token, String userName, String img, String lastLoginDate) {
		super();
		this.id = id;
		this.token = token;
		this.userName = userName;
		this.img = img;
		this.lastLoginDate = lastLoginDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getLastLoginDate() {
		return lastLoginDate;
	}

	public void setLastLoginDate(String lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}

	@Override
	public String toString() {
		return "TokenResponseDTO [id=" + id + ", token=" + token + ", userName=" + userName + ", img=" + img
				+ ", lastLoginDate=" + lastLoginDate + "]";
	}

	
	
	
}
