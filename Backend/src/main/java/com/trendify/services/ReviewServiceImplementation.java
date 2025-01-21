package com.trendify.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trendify.exception.ProductException;
import com.trendify.model.Product;
import com.trendify.model.Review;
import com.trendify.model.User;
import com.trendify.repository.ReviewRepository;
import com.trendify.request.ReviewRequest;

@Service
public class ReviewServiceImplementation implements ReviewService{

	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private ProductService productService;
	
	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		Product product = productService.findProductById(req.getProductId());
		
		Review review = new Review();
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getAllReview(Long productId) {
	
		return reviewRepository.getAllProductsReview(productId);
	}

}
