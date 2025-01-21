package com.trendify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trendify.exception.UserException;
import com.trendify.model.User;
import com.trendify.services.UserServices;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserServices userServices;
	
	@GetMapping("/profile")
	public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization")String jwt)throws UserException{
		
		User user = userServices.findUserProfileByJwt(jwt);
		
		return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
	}
	

}
