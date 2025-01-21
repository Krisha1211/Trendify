package com.trendify.services;

import org.springframework.aop.ThrowsAdvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trendify.exception.CartItemException;
import com.trendify.exception.ProductException;
import com.trendify.exception.UserException;
import com.trendify.model.Cart;
import com.trendify.model.CartItem;
import com.trendify.model.Product;
import com.trendify.model.User;

import com.trendify.repository.CartRepository;
import com.trendify.request.AddItemRequest;

@Service
public class CartServiceImplementation implements CartService{

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CartItemService cartItemService;
	
	@Autowired
	private ProductService productService;
	
	@Override
	public Cart cretaeCart(User user) {
		Cart cart= new Cart();
		cart.setUser(user);
		return cartRepository.save(cart);
	}

	@Override
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
		Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findProductById(req.getProductId());
	
        CartItem isPresent = cartItemService.isCartItemExist(cart, product, req.getSize(), userId);
        
        if(isPresent==null)
        {
        	CartItem cartItem = new CartItem();
        	cartItem.setProduct(product); 
        	cartItem.setCart(cart);
        	cartItem.setQuantity(req.getQuantity());
        	cartItem.setUserId(userId);
        	
        	int price= req.getQuantity()*product.getDiscountedPrice();
        	cartItem.setPrice(price);
        	cartItem.setSize(req.getSize());
        	
        	CartItem createdCartItem = cartItemService.createCartItem(cartItem);
            cart.getCartItems().add(createdCartItem);
        }
        else {
			isPresent.setQuantity(isPresent.getQuantity()+1);
			try {
				
				CartItem updatedCartItem =cartItemService.updateCartItem(userId, isPresent.getId(), isPresent);
			} catch (CartItemException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (UserException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
       
        return "item Add To Cart";
	}

	@Override
	public Cart findUserCart(Long userId) {
		Cart cart=cartRepository.findByUserId(userId);
		
		int totalPrice=0;
		int totalDiscountedPrice=0;
		int totalItem=0;
		
		for(CartItem cartItem : cart.getCartItems())
		{
			totalPrice=totalPrice+cartItem.getPrice();
			totalDiscountedPrice=totalDiscountedPrice+cartItem.getDiscountedPrice();
			totalItem=totalItem+cartItem.getQuantity();
		}
		
		cart.setTotalDiscountedPrice(totalDiscountedPrice);
		cart.setTotalItem(totalItem);
		cart.setTotalPrice(totalPrice);
		cart.setDiscount(totalPrice-totalDiscountedPrice);
	
		
		return cartRepository.save(cart);
	}
	
	

}
