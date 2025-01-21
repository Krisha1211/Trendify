package com.trendify.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trendify.dto.ProductDTO;
import com.trendify.exception.ProductException;
import com.trendify.model.Product;
import com.trendify.services.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;

	 @GetMapping
	    public ResponseEntity<Page<ProductDTO>> findProductByCategoryHandler(
	            @RequestParam(required = false) String category,
	            @RequestParam(required = false) List<String> color,
	            @RequestParam(required = false) List<String> size,
	            @RequestParam(required = false) Integer minPrice,
	            @RequestParam(required = false) Integer maxPrice,
	            @RequestParam(required = false) Integer minDiscount,
	            @RequestParam(defaultValue = "id,asc") String sort,
	            @RequestParam(required = false, defaultValue = "available") String stock,
	            @RequestParam(defaultValue = "0") Integer pageNumber,
	            @RequestParam(defaultValue = "10") Integer pageSize)
	    {
	        Page<Product> products = productService.getAllProduct(category, color, size, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize);

	        Page<ProductDTO> productDTOs = products.map(ProductDTO::new);

	        return new ResponseEntity<>(productDTOs, HttpStatus.OK);
	    }
	
	@GetMapping("/id/{productId}")
	public ResponseEntity<Product> findProductByIdHandler(@PathVariable Long productId)throws ProductException{
		Product product= productService.findProductById(productId);
		return new ResponseEntity<>(product,HttpStatus.ACCEPTED);
	}
	
	 @GetMapping("/category/{categoryName}")
	    public ResponseEntity<List<ProductDTO>> getProductsByCategory(@PathVariable String categoryName) {
	        List<Product> products = productService.findProductByCategory(categoryName);
	        List<ProductDTO> productDTOs = products.stream().map(ProductDTO::new).collect(Collectors.toList());
	        return new ResponseEntity<>(productDTOs, HttpStatus.OK);
	    }

}
