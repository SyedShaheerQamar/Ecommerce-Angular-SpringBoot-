package com.ecommerce.Ecommerce.service;

import com.ecommerce.Ecommerce.domain.Cart;
import com.ecommerce.Ecommerce.domain.Products;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {

    Cart saveProductToCart(Cart cart);

    List<Cart> getAllProductsFromCart();

    void delteFromCart(Integer p_id);

}
