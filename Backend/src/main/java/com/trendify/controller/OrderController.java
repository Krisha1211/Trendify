package com.trendify.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trendify.exception.OrderException;
import com.trendify.exception.UserException;
import com.trendify.model.Address;
import com.trendify.model.User;
import com.trendify.services.OrderService;
import com.trendify.services.UserServices;
import com.trendify.model.Order;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private OrderService  orderService;
	
	@Autowired
	private UserServices userServices;
	
	@PostMapping("/")
	public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress,
			@RequestHeader("Authorization")String jwt)throws UserException {
          User user= userServices.findUserProfileByJwt(jwt);
		
		Order order= orderService.createOrder(user,shippingAddress);
		
		return new ResponseEntity<Order>(order,HttpStatus.CREATED);
	}

	@GetMapping("/user")
	public ResponseEntity<List<Order>> usersOrderHistory(@RequestHeader("Authorization")String jwt) throws UserException{
		User user= userServices.findUserProfileByJwt(jwt);
		List<Order> orders= orderService.userOrderHistory(user.getId());
		
		return new ResponseEntity<>(orders,HttpStatus.CREATED);
	}
	
	@GetMapping("/{Id}")
	public ResponseEntity<Order> findOrderById(@PathVariable("Id")Long orderId,
			@RequestHeader("Authorization")String jwt)throws UserException,OrderException{
		 User user=userServices.findUserProfileByJwt(jwt);
		 Order order = orderService.findOrderById(orderId);
		 
		 return new ResponseEntity<>(order,HttpStatus.ACCEPTED);
	}
	
}
