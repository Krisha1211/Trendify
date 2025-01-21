package com.trendify.controller;


import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trendify.exception.CartItemException;
import com.trendify.exception.UserException;
import com.trendify.model.CartItem;
import com.trendify.model.User;
import com.trendify.response.ApiResponse;
import com.trendify.services.CartItemService;
import com.trendify.services.UserServices;

@RestController
@RequestMapping("/api/cart_items")
public class CartItemController {
	
	@Autowired
	private CartItemService cartItemService;
	
	@Autowired
	private UserServices userServices;
	
	
	 @PostMapping("/")
	    public ResponseEntity<ApiResponse> createCartItem(@RequestBody CartItem cartItem, @RequestHeader("Authorization") String jwt) throws UserException {
	        User user = userServices.findUserProfileByJwt(jwt);
	        cartItem.setUserId(user.getId());

	        CartItem createdCartItem = cartItemService.createCartItem(cartItem);

	        ApiResponse res = new ApiResponse();
	        res.setMessage("Item added to cart");
	        res.setStatus(true);
	        return new ResponseEntity<>(res, HttpStatus.CREATED);
	    }
	
	@DeleteMapping("/delete/{cartItemId}")
	public ResponseEntity<ApiResponse> deleteCarItem(@PathVariable Long cartItemId,
			@RequestHeader("Authorization") String jwt)throws UserException,CartItemException
	{
	     User user=	userServices.findUserProfileByJwt(jwt);
	     
	     cartItemService.removeCartItem(user.getId(), cartItemId);
	     
	     ApiResponse res=new ApiResponse();
	     res.setMessage("item deleted from cart");
	     res.setStatus(true);
	     return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	  @GetMapping("/id/{cartItemId}")
	    public ResponseEntity<CartItem> getCartItem(@PathVariable Long cartItemId, @RequestHeader("Authorization") String jwt) throws UserException, CartItemException {
	        userServices.findUserProfileByJwt(jwt);

	        CartItem cartItem = cartItemService.findCartItemById(cartItemId);

	        return new ResponseEntity<>(cartItem, HttpStatus.OK);
	    }
	  
	  @PutMapping("/update/{cartItemId}")
	    public ResponseEntity<ApiResponse> updateCartItem(@PathVariable Long cartItemId, @RequestBody CartItem cartItem, @RequestHeader("Authorization") String jwt) throws UserException, CartItemException {
	        User user = userServices.findUserProfileByJwt(jwt);
	        System.out.println("hii");

	        CartItem updatedCartItem = cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);

	        ApiResponse res = new ApiResponse();
	        res.setMessage("Item updated in cart");
	        res.setStatus(true);
	        return new ResponseEntity<>(res, HttpStatus.OK);
	    }

	  
}
