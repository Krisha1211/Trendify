package com.trendify.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trendify.exception.ProductException;
import com.trendify.exception.UserException;
import com.trendify.model.Rating;
import com.trendify.model.User;
import com.trendify.request.RatingRequest;
import com.trendify.services.RatingService;
import com.trendify.services.UserServices;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {
	
	@Autowired
	private UserServices userServices;
	
	@Autowired
	private RatingService ratingService;
	
	@PostMapping("/create")
	public ResponseEntity<Rating> createRtaing(@RequestBody RatingRequest req,
			@RequestHeader("Authorization") String jwt)throws UserException,ProductException{
		User user = userServices.findUserProfileByJwt(jwt);
		Rating rating = ratingService.creteRating(req, user);
		
		return new ResponseEntity<>(rating,HttpStatus.CREATED);
	}
	
	@GetMapping("product/{productId}")
	public ResponseEntity<List<Rating>> getProductRating(@PathVariable Long productId,
			@RequestHeader("Authorization")String jwt)throws UserException,ProductException{
	User user= userServices.findUserProfileByJwt(jwt);
	
	List<Rating> ratings= ratingService.getProductRating(productId);
	return new ResponseEntity<>(ratings,HttpStatus.ACCEPTED);
		
	}
	

}
