package com.trendify.dto;

import java.time.LocalDateTime;

import com.trendify.model.Product;

public class ProductDTO {
    private Long id;
    private String title;
    private String description;
    private int price;
    private int discountedPrice;
    private int discountPresent;
    private int quantity;
    private String brand;
    private String color;
    private String imgeUrl;
    private int numRatings;
    private String category; // Assuming this will hold category name or identifier
    private LocalDateTime createdAt;

    // Constructors, getters, setters (as previously discussed)
    // Constructor for mapping from Product entity
    public ProductDTO(Product product) {
        this.id = product.getId();
        this.title = product.getTitle();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.discountedPrice = product.getDiscountedPrice();
        this.discountPresent = product.getDiscountPresent();
        this.quantity = product.getQuantity();
        this.brand = product.getBrand();
        this.color = product.getColor();
        this.imgeUrl = product.getImgeUrl();
        this.numRatings = product.getNumRatings();
        this.category = product.getCategory().getName(); // Assuming Category has a 'name' field
        this.createdAt = product.getCreatedAt();
        // Initialize other fields as needed
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getDiscountedPrice() {
		return discountedPrice;
	}

	public void setDiscountedPrice(int discountedPrice) {
		this.discountedPrice = discountedPrice;
	}

	public int getDiscountPresent() {
		return discountPresent;
	}

	public void setDiscountPresent(int discountPresent) {
		this.discountPresent = discountPresent;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getImgeUrl() {
		return imgeUrl;
	}

	public void setImgeUrl(String imgeUrl) {
		this.imgeUrl = imgeUrl;
	}

	public int getNumRatings() {
		return numRatings;
	}

	public void setNumRatings(int numRatings) {
		this.numRatings = numRatings;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

    // Getters and setters
    // Ensure to provide getters and setters for all fields
}
