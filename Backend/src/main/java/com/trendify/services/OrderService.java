package com.trendify.services;

import java.util.List;

import com.trendify.exception.OrderException;
import com.trendify.model.Address;
import com.trendify.model.Order;
import com.trendify.model.User;

public interface OrderService {
	
	public Order createOrder(User user,Address shippingAddress);
	
	public Order findOrderById(Long orderId)throws OrderException;
	
	public List<Order>  userOrderHistory(Long userId);
	
	public Order placedOrder(Long orderId)throws OrderException;
	
	public Order confirmedOrder(Long orderId)throws OrderException;
	
	public Order shippedOrder(Long orderId)throws OrderException;
	
	public Order deliveredOrder(Long orderId)throws OrderException;
	
	public Order cancledOrder(Long orderId)throws OrderException;

	public List<Order> getAllOrders();
	
	public void deleteOrder(Long orederId) throws OrderException;
}
