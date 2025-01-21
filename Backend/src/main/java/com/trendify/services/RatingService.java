package com.trendify.services;

import java.util.List;

import com.trendify.exception.ProductException;
import com.trendify.model.Rating;
import com.trendify.model.User;
import com.trendify.request.RatingRequest;

public interface RatingService {
	
	public Rating creteRating(RatingRequest req,User user)throws
	ProductException;
	
	public List<Rating> getProductRating(Long productId); 

}
