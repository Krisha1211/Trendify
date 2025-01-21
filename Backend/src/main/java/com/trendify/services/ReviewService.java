package com.trendify.services;

import java.util.List;

import com.trendify.exception.ProductException;
import com.trendify.model.Review;
import com.trendify.model.User;
import com.trendify.request.ReviewRequest;

public interface ReviewService {
	
	public Review createReview(ReviewRequest req,User user)throws ProductException;

	public List<Review> getAllReview(Long productId); 
	
}
