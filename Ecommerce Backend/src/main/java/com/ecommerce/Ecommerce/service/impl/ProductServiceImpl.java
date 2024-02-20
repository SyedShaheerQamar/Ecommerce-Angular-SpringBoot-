package com.ecommerce.Ecommerce.service.impl;

import com.ecommerce.Ecommerce.domain.Products;
import com.ecommerce.Ecommerce.repository.ProductsRepository;
import com.ecommerce.Ecommerce.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    @Override
    public Products findProductById(Integer id) {
        Products products = productsRepository.findAll()
                .stream().filter(s -> s.getId().equals(id))
                .findFirst().orElse(null);

        if(products != null){
            return products;
        }

        return null;

    }
}
