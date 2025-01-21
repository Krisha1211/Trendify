package com.trendify.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trendify.model.OrderItem;
import com.trendify.repository.OrderItemRepository;

@Service
public class OrderItemServiceImplementation implements OrderItemService {

	@Autowired
	private OrderItemRepository orderItemRepository;
	
	@Override
	public OrderItem createOrderItem(OrderItem orderitem) {
	
		return orderItemRepository.save(orderitem);
	}

}
