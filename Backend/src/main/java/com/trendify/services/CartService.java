package com.trendify.services;

import com.trendify.exception.ProductException;
import com.trendify.model.Cart;
import com.trendify.model.User;
import com.trendify.request.AddItemRequest;

public interface CartService {

	
	public Cart cretaeCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req)throws ProductException;

    public Cart findUserCart(Long userId);
}
