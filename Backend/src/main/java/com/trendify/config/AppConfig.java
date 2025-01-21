package com.trendify.config;
import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
public class AppConfig {
	
	
//	bean because it is service...
	@Bean
	public SecurityFilterChain  securityFilterChain(HttpSecurity http)throws Exception{
	  
//		this is for normally like if we use spring seqcurity  then it will work like...save the data in cookies but here 
//		we have to use...jwt for token and all so that why we remove this spring security functionality by make it stateless
//     second line is for if our request strt from this api then authenticated that otherwise..permite all	
//		third line is for before using any method first use this authentication..and disable csrf for not give error..
//		Cross-Origin Resource Sharing (CORS) support....in this method we allow to give custom resource...
		
		
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()		
		.authorizeHttpRequests(Authorize->Authorize
		.requestMatchers("/api/").authenticated() 
		.anyRequest().permitAll())
		.addFilterBefore(new JwtValidator(), BasicAuthenticationFilter.class).csrf().disable()
		.cors().configurationSource(new CorsConfigurationSource() {
			
			@Override
			public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
				CorsConfiguration cfg = new CorsConfiguration();
				
//				in this give those api which we have to allow to our forntend..or which api we have to use this backend..
				cfg.setAllowedOrigins(Arrays.asList(
						 "http://localhost:3000/",
						 "http://localhost:4200/"
						));
//				allowed methods like get , post and all...and for allowed all method..
				cfg.setAllowedMethods(Collections.singletonList("*"));
				cfg.setAllowCredentials(true);
				cfg.setAllowedHeaders(Collections.singletonList("*"));
				cfg.setExposedHeaders(Arrays.asList("Authorization"));
				cfg.setMaxAge(3600L);
				return cfg;
			}
		});
		
		

		return http.build();
	}
	 
//	when we create a new user then first we have to encryprit their password then we have to save that password into database..
	
	@Bean
	public PasswordEncoder passwordEncoder()
	{
	  return new BCryptPasswordEncoder();
	}

}