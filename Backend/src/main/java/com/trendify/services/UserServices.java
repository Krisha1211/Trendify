package com.trendify.services;

import com.trendify.exception.UserException;
import com.trendify.model.User;


public interface UserServices {
	
	public User findUserById(Long UserId) throws UserException;
    
	public User findUserProfileByJwt(String jwt)throws UserException;
	
	
}
