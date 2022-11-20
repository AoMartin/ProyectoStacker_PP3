package com.mao.stackerapi.config;


import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Service;

import com.mao.stackerapi.utils.Constantes;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * <p>
 * Servicio para validar la seguridad.
 * </p>
 * 
 * @author molsson
 * @since 20/11/2022
 */

@Service
public class JwtTokenProvider {
	
	public String generateToken(String username, String id){
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_USER");
		String token = null;
	
		token = Jwts.builder().setId(id).setSubject(username)
				.claim("authorities",
						grantedAuthorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + Constantes.JWT_EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS512, Constantes.JWT_SECRET_KEY.getBytes()).compact();
		
		return token;
	}

}
