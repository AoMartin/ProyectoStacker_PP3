package com.mao.stackerapi.utils;

public class Constantes {

	public static final String AUTH_HEADER = "Authorization";
	
    //Utilizado en la autorizacion de usuario
    public static final String JWT_SECRET_KEY = "SecretKeyToGenJWTs";
    //public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long JWT_EXPIRATION_TIME = 900000;
    
    public static enum TipoPermisoUsuario { 
    	ADMIN, MOD, BAN
    }
}
