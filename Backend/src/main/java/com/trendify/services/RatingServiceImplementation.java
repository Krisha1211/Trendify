package com.trendify.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trendify.exception.ProductException;
import com.trendify.model.Product;
import com.trendify.model.Rating;
import com.trendify.model.User;

import com.trendify.repository.RatingRepository;
import com.trendify.request.RatingRequest;

@Service
public class RatingServiceImplementation implements RatingService {

@Autowired
private RatingRepository ratingRepository;

@Autowired
private ProductService productService;
	
	@Override
	public Rating creteRating(RatingRequest req, User user) throws ProductException {
		Product product = productService.findProductById(req.getProductId());
		Rating rating =new Rating();
		rating.setProduct(product);
		rating.setUser(user);
		rating.setRating(req.getRating());
		rating.setCreatedAt(LocalDateTime.now());
		
  		return ratingRepository.save(rating);
	}

	@Override
	public List<Rating> getProductRating(Long productId) {
		
		return ratingRepository.getAllProductsRating(productId);
	}

}
