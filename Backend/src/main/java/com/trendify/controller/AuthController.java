package com.trendify.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trendify.config.JwtProvider;
import com.trendify.exception.UserException;
import com.trendify.model.Cart;
import com.trendify.model.User;
import com.trendify.repository.UserRepository;
import com.trendify.request.LoginRequest;
import com.trendify.response.AuthResponse;
import com.trendify.services.CartService;
import com.trendify.services.CustomeUserServiceImplementation;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JwtProvider jwtprovider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private CustomeUserServiceImplementation customUserService;
	
	@Autowired
	private CartService cartService;
	
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user)throws UserException{
		
		String email = user.getEmail();
		String password=user.getPassword();
		String firstname = user.getFirstName();
		String lastname = user.getLastName();
		
		
		User isEmailExist = userRepository.findByEmail(email);
		
		if(isEmailExist!=null)
		{
			throw new UserException("Email is already used with another account");
		}
		
		User createdUser= new User();
		createdUser.setEmail(email);
	    createdUser.setPassword(passwordEncoder.encode(password));
	    createdUser.setFirstName(firstname);
	    createdUser.setLastName(lastname);
	   
	    
	    User savedUser=userRepository.save(createdUser);
	    
	    Cart cart= cartService.cretaeCart(savedUser);
	    
	    
	    Authentication authentication= new UsernamePasswordAuthenticationToken(savedUser.getEmail(),savedUser.getPassword());
	    SecurityContextHolder.getContext().setAuthentication(authentication);
	    
	    String token = jwtprovider.generateToken(authentication);
	    
	    AuthResponse authResponse= new AuthResponse();
	    authResponse.setJwt(token);
	    authResponse.setMessage("signup Success");
	    
	    return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
	}

	@PostMapping("/signin")
	public ResponseEntity<AuthResponse>loginHandler(@RequestBody LoginRequest loginRequest)
	{
		String username=loginRequest.getEmail();
		String password=loginRequest.getPassword();
		
		Authentication authentication=authenticate(username,password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		 String token = jwtprovider.generateToken(authentication);
		    

		    AuthResponse authResponse= new AuthResponse();
		    authResponse.setJwt(token);
		    authResponse.setMessage("signin Success");
		    
		    return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
	}


	private Authentication authenticate(String username, String password) {
		UserDetails userDetails=customUserService.loadUserByUsername(username);
		
		
		
		if(userDetails==null)
		{
			throw new BadCredentialsException("inavalid username..");
		}
		
		if(!passwordEncoder.matches(password, userDetails.getPassword()))
		{
			throw new BadCredentialsException("invalid password..");
		}
		
		return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
	}
	
}