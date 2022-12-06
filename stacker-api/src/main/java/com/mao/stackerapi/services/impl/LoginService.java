package com.mao.stackerapi.services.impl;

import java.sql.Timestamp;
import java.util.Optional;
import java.util.UUID;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mao.stackerapi.config.JwtTokenProvider;
import com.mao.stackerapi.dto.security.PermisoRequestDTO;
import com.mao.stackerapi.dto.security.TokenResponseDTO;
import com.mao.stackerapi.dto.security.UserDTO;
import com.mao.stackerapi.models.security.LoginBO;
import com.mao.stackerapi.models.security.PermisoBO;
import com.mao.stackerapi.repository.security.ILoginRepository;
import com.mao.stackerapi.services.generic.ILoginService;
import com.mao.stackerapi.utils.Constantes.TipoPermisoUsuario;

@Service
public class LoginService implements ILoginService {

	private static final Logger logger = LogManager.getLogger(LoginService.class);

	@Autowired
	ILoginRepository loginRepository;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private PermisoServiceImpl permisoService;
	
	@Override
	public TokenResponseDTO autenticarUser(UserDTO userDto) {
		logger.debug(String.format("Entrando en %s", new Throwable().getStackTrace()[0].getMethodName()));

		TokenResponseDTO ret = null;
		String id = UUID.randomUUID().toString().replace("-", "");
		String token;

		LoginBO login = loginRepository.findByUser(userDto.getUsername());

		try {			
			PermisoRequestDTO permisoReq = new PermisoRequestDTO(null,login.getIdLogin(),null);
			PermisoBO permiso = permisoService.obtenerPermiso(permisoReq);
		
			if(null != permiso) {
				if(permiso.getTipoPermiso().equals(TipoPermisoUsuario.BAN)) {
					throw new RuntimeException("El usuario ingresado se encuentra baneado.");
				}
			}
		}catch(Exception e) {
			logger.error(e);
		}
		
		if(null != login) {
			//Usuario ya creado
			if(!passwordEncoder.matches(userDto.getPassword(), login.getPassword())) {
				throw new RuntimeException("Usuario ya existente. Password incorrecto.");
			}

			login.setUltimoLogin(new Timestamp(System.currentTimeMillis()));
			loginRepository.save(login);
		}else {
			//Nuevo user
			login = new LoginBO();
			login.setFechaHoraCreacion(new Timestamp(System.currentTimeMillis()));
			login.setUltimoLogin(new Timestamp(System.currentTimeMillis()));
			login.setUser(userDto.getUsername());
			login.setPassword(passwordEncoder.encode(userDto.getPassword()));
			loginRepository.save(login);
			
			//TODO: Crear perfil
		}
		
		token = jwtTokenProvider.generateToken(userDto.getUsername(), id);
		ret = new TokenResponseDTO(login.getIdLogin(),token,userDto.getUsername(),login.getImagenUrl(),login.getUltimoLogin().toString());

		logger.debug(String.format("Saliendo de %s", new Throwable().getStackTrace()[0].getMethodName()));
		return ret;
	}

	@Override
	public String cambiarImagen(Long idLogin, String nuevaImagen) {
		logger.debug(String.format("Entrando en %s", new Throwable().getStackTrace()[0].getMethodName()));
		String res = nuevaImagen;
		
		Optional<LoginBO> loginEncontrado = loginRepository.findById(idLogin);
		
		try {
			LoginBO login = loginEncontrado.get();
			login.setImagenUrl(nuevaImagen);
			loginRepository.save(login);
		}catch(Exception e) {
			logger.error(e);
			res = null;
		}
		
		logger.debug(String.format("Saliendo de %s", new Throwable().getStackTrace()[0].getMethodName()));
		return res;
	}

}


