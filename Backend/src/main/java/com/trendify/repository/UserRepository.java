package com.trendify.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.trendify.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
//    When you define a method with a specific naming convention, 
//	Spring Data JPA automatically generates the appropriate query for it. 
//	The findByEmail method in your UserRepository interface follows this convention and allows you to find a User entity by its email field.
//	other then this you have to write..quary and param..
	public User findByEmail(String email);
}
