package com.mao.stackerapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.cors().and()
		.csrf()
		.disable()
		.addFilterAfter(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
		.authorizeRequests()
		.antMatchers(
			"/login/autenticar-usuario",
			"/publicacion/obtener-todos-puntaje",
			"/publicacion/obtener-todos-hora-creacion",
			"/publicacion/obtener-todos-actualizacion",
			"/comentario/obtener-todos-pub/**",
			"/v3/api-docs/",
			"/v3/api-docs",
			"/api-docs/",
			"/swagger-ui.html",
			"/swagger-ui/**",
			"/v3/api-docs/swagger-config",
			"/configuration/security",
			"/swagger-resources", "/swagger-resources/configuration/security",
			"/swagger-resources/configuration/ui",
			"/v2/api-docs",
			"/stackerapi/")
		.permitAll()
		.anyRequest().authenticated();	
		
		return http.build();
	}	
		
	@Bean
	public PasswordEncoder encoder() {
	    return new BCryptPasswordEncoder();
	}
}
