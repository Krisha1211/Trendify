package com.trendify.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trendify.exception.ProductException;
import com.trendify.model.Category;
import com.trendify.model.Product;
import com.trendify.repository.CategoryRepository;
import com.trendify.repository.ProductRepository;
import com.trendify.request.CreateProductRequest;

@Service
public class ProductServiceImplementation implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Product createProduct(CreateProductRequest req) {
        Category toplavel = getCategoryByName(req.getTopLavelCategory());
        if (toplavel == null) {
            toplavel = new Category();
            toplavel.setName(req.getTopLavelCategory());
            toplavel.setLevel(1);
            toplavel = categoryRepository.save(toplavel);
        }

        Category secondlavel = getCategoryByNameAndParent(req.getSecondLavelCategory(), toplavel.getName(), 2);
        if (secondlavel == null) {
            secondlavel = new Category();
            secondlavel.setName(req.getSecondLavelCategory());
            secondlavel.setLevel(2);
            secondlavel.setParentCategory(toplavel);
            secondlavel = categoryRepository.save(secondlavel);
        }

        Category thirdlavel = getCategoryByNameAndParent(req.getThirdLavelCategory(), secondlavel.getName(), 3);
        if (thirdlavel == null) {
            thirdlavel = new Category();
            thirdlavel.setName(req.getThirdLavelCategory());
            thirdlavel.setLevel(3);
            thirdlavel.setParentCategory(secondlavel);
            thirdlavel = categoryRepository.save(thirdlavel);
        }

        Product product = new Product();
        product.setTitle(req.getTitle());
        product.setColor(req.getColor());
        product.setDescription(req.getDescription());
        product.setDiscountedPrice(req.getDiscountedPrice());
        product.setDiscountPresent(req.getDiscountPresent());
        product.setImgeUrl(req.getImageUrl());
        product.setBrand(req.getBrand());
        product.setPrice(req.getPrice());
        product.setSizes(req.getSize());
        product.setQuantity(req.getQuantity());
        product.setCategory(thirdlavel);
        product.setCreatedAt(LocalDateTime.now());

        Product savedProduct = productRepository.save(product);

        return savedProduct;
    }

    private Category getCategoryByName(String name) {
        List<Category> categories = categoryRepository.findByName(name);
        return categories.isEmpty() ? null : categories.get(0);
    }

    private Category getCategoryByNameAndParent(String name, String parentName, int level) {
        Category parentCategory = getCategoryByName(parentName);
        if (parentCategory != null) {
            return categoryRepository.findByNameAndParent(name, parentCategory.getName());
        }
        return null;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        Product product = findProductById(productId);
        product.getSizes().clear();
        productRepository.delete(product);
        return "Product deleted successfully";
    }

    @Override
    public Product updateProduct(Long productId, Product req) throws ProductException {
        Product product = findProductById(productId);
        if (req.getQuantity() != 0) {
            product.setQuantity(req.getQuantity());
        }
        return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long id) throws ProductException {
        Optional<Product> opt = productRepository.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        }
        throw new ProductException("Product not found with id: " + id);
    }

    @Override
    public List<Product> findProductByCategory(String categoryName) {
        // Find the category by name
        Category category = getCategoryByName(categoryName);

        // If the category exists, find products associated with it
        if (category != null) {
            return productRepository.findByCategory(category);
        }
        
        // Return an empty list if no category is found
        return List.of();
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice,
            Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {

        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);

        if (!colors.isEmpty()) {
            products = products.stream()
                               .filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
                               .collect(Collectors.toList());
        }

        if (stock != null) {
            if (stock.equals("in_stock")) {
                products = products.stream().filter(p -> p.getQuantity() > 0).collect(Collectors.toList());
            } else if (stock.equals("out_of_stock")) {
                products = products.stream().filter(p -> p.getQuantity() < 1).collect(Collectors.toList());
            }
        }

        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());
        List<Product> pageContent = products.subList(startIndex, endIndex);
        Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());

        return filteredProducts;
    }

    @Override
    public List<Product> findAllProduct() throws ProductException {
        List<Product> products = productRepository.findAll();
        return products;
    }
}
