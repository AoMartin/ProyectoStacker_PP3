package com.mao.stackerapi.services.impl;

import java.sql.Timestamp;
import java.util.UUID;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mao.stackerapi.config.JwtTokenProvider;
import com.mao.stackerapi.dto.security.TokenResponseDTO;
import com.mao.stackerapi.dto.security.UserDTO;
import com.mao.stackerapi.models.security.LoginBO;
import com.mao.stackerapi.repository.security.ILoginRepository;
import com.mao.stackerapi.services.generic.ILoginService;

@Service
public class LoginService implements ILoginService {

	private static final Logger logger = LogManager.getLogger(LoginService.class);

	@Autowired
	ILoginRepository loginRepository;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Override
	public TokenResponseDTO autenticarUser(UserDTO userDto) {
		logger.debug(String.format("Entrando en %s", new Throwable().getStackTrace()[0].getMethodName()));

		TokenResponseDTO ret = null;
		String id = UUID.randomUUID().toString().replace("-", "");
		String token;

		LoginBO login = loginRepository.findByUser(userDto.getUsername());

		// TODO manejar caso relogin, guardar user con password, responder ante usuario ya creado

		login = new LoginBO();
		login.setUltimoLogin(new Timestamp(System.currentTimeMillis()));
		login.setUser(userDto.getUsername());
		loginRepository.save(login);

		token = jwtTokenProvider.generateToken(userDto.getUsername(), id);
		ret = new TokenResponseDTO(token,userDto.getUsername(),login.getImagenUrl(),login.getUltimoLogin().toString());

		logger.debug(String.format("Saliendo de %s", new Throwable().getStackTrace()[0].getMethodName()));
		return ret;
	}

}
