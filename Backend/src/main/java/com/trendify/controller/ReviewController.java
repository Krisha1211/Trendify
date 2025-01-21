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
import com.trendify.model.Review;
import com.trendify.model.User;
import com.trendify.request.ReviewRequest;
import com.trendify.services.ReviewService;
import com.trendify.services.UserServices;

@RestController
@RequestMapping("api/reviews")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	@Autowired
	private UserServices userServices;
	
	@PostMapping("/create")
	public ResponseEntity<Review> createReview(@RequestBody ReviewRequest req,
			@RequestHeader("Authorization") String jwt)throws UserException,ProductException{
		User user = userServices.findUserProfileByJwt(jwt);
		Review review = reviewService.createReview(req, user);
		
		return new ResponseEntity<>(review,HttpStatus.CREATED);
	}
	
	@GetMapping("product/{productId}")
	public ResponseEntity<List<Review>> getProductReview(@PathVariable Long productId,
			@RequestHeader("Authorization")String jwt)throws UserException,ProductException{
	User user= userServices.findUserProfileByJwt(jwt);
	
	List<Review> reviews= reviewService.getAllReview(productId);
	return new ResponseEntity<>(reviews,HttpStatus.ACCEPTED);
		
	}

}
