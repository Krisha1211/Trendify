package com.trendify.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trendify.exception.CartItemException;
import com.trendify.exception.UserException;
import com.trendify.model.Cart;
import com.trendify.model.CartItem;
import com.trendify.model.Product;
import com.trendify.model.User;
import com.trendify.repository.CartItemRepository;


@Service
public class CartItemServiceImplementation implements CartItemService {

	@Autowired
	private CartItemRepository cartItemRepository;
	
	@Autowired
	private UserServices userServices;
	
	 
	@Override
	public CartItem createCartItem(CartItem cartItem) {
		   cartItem.setQuantity(1);
		   cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
		   cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());
		
		   CartItem createdCartItem = cartItemRepository.save(cartItem);
		   
		   return createdCartItem;
	}

 
	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		CartItem item=findCartItemById(id);
		User user=userServices.findUserById(userId);
		
//		only who can create this cartitem only that person can upadte this..
		if(user.getId().equals(userId))
		{
			item.setQuantity(item.getQuantity());
			item.setPrice(item.getQuantity()*item.getProduct().getPrice());
		    item.setDiscountedPrice(item.getQuantity()*item.getProduct().getDiscountedPrice());			
		}
		
	
		return cartItemRepository.save(item);
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
		CartItem cartItem=cartItemRepository.isCartItemExist(cart, product, size, userId);
		return cartItem;
	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
		CartItem cartItem = findCartItemById(cartItemId);
		
		User user= userServices.findUserById(cartItem.getUserId());
		
	    User reqUser= userServices.findUserById(userId);
	    
	    
	    
	    if(user.getId().equals(reqUser.getId()))
	    {
	    	cartItemRepository.deleteById(cartItemId);
	    }
	    else {
	      throw new UserException("you can't remove another users item");
		}
	    
	}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
		Optional<CartItem> opt= cartItemRepository.findById(cartItemId);
	
		if(opt.isPresent())
		{
			return opt.get();
		}
       throw new CartItemException("cartItem not found with id - "+cartItemId);
	}

}
