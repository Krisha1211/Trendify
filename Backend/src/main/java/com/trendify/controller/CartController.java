package com.trendify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trendify.exception.ProductException;
import com.trendify.exception.UserException;
import com.trendify.model.Cart;
import com.trendify.model.User;
import com.trendify.request.AddItemRequest;
import com.trendify.response.ApiResponse;
import com.trendify.services.CartService;
import com.trendify.services.UserServices;



@RestController
@RequestMapping("/api/cart")
public class CartController {
	
	@Autowired
	private UserServices userServices;
	
	@Autowired
	private CartService cartService;
	
	@GetMapping("/")
	public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization")String jwt)throws UserException{
		
		User user= userServices.findUserProfileByJwt(jwt);
		Cart cart = cartService.findUserCart(user.getId());
		
		return new ResponseEntity<Cart>(cart,HttpStatus.OK);
		
	}
	
	@PutMapping("/add")
	public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,@RequestHeader("Authorization")String jwt)throws UserException,ProductException{
		
		User user= userServices.findUserProfileByJwt(jwt);
		cartService.addCartItem(user.getId(), req);
	  ApiResponse res = new ApiResponse();
	  res.setMessage("item added to cart");
	  res.setStatus(true);
	  return new ResponseEntity<>(res,HttpStatus.OK);
	}
	

}
