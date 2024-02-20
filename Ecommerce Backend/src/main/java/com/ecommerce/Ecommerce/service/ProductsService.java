package com.ecommerce.Ecommerce.service;

import com.ecommerce.Ecommerce.domain.Products;

import java.util.List;

public interface ProductsService {

    List<Products> getAllProducts();

    Products findProductById(Integer id);

}
