package com.trendify.config;

import java.io.IOException;
import java.util.List;

import javax.crypto.SecretKey;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtValidator extends  OncePerRequestFilter{

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		String jwt=request.getHeader(JwtConstant.JWT_HEADER);
		if(jwt!=null)
		{
//			our token is like... =Bearere asdfghjkl so for extract those first part..we use this..
			jwt=jwt.substring(7);
			try {
			   
				SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
				Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();

				
//				now claims is in form of object now we have to come mail from this..
				
				String email = String.valueOf(claims.get("email"));
				
				String authorities =String.valueOf(claims.get("authorities"));
				
				
//				now convert this string into grantedauthorities..
				List<GrantedAuthority> auths = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
				Authentication authentication= new UsernamePasswordAuthenticationToken(email,null, auths);
				
				SecurityContextHolder.getContext().setAuthentication(authentication);
			} catch (Exception e) {
				throw new BadCredentialsException("invalid token...from jwt validotor");
			}
		}
	  filterChain.doFilter(request, response);		
	}
	
}