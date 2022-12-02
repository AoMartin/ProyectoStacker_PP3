package com.mao.stackerapi.dto.security;

public class CambiarImagenReqDTO {
	
	private Long id;
	private String url;
	
	public CambiarImagenReqDTO() {}

	public CambiarImagenReqDTO(Long id, String url) {
		super();
		this.id = id;
		this.url = url;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "CambiarImagenReqDTO [id=" + id + ", url=" + url + "]";
	}
	
	
}
