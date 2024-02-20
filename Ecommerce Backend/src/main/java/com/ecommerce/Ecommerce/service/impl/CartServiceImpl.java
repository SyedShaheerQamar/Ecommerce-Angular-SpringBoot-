package com.ecommerce.Ecommerce.service.impl;

import com.ecommerce.Ecommerce.domain.Cart;
import com.ecommerce.Ecommerce.domain.Products;
import com.ecommerce.Ecommerce.repository.CartRepository;
import com.ecommerce.Ecommerce.service.CartService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart saveProductToCart(Cart cart) {
        List<Cart> cartList = cartRepository.findAll();

        Cart found = cartList.stream()
                .filter(s -> s.getProduct_id().equals(cart.getProduct_id()))
                .findFirst().orElse(null);

        if(found != null){
            found.setQuantity(found.getQuantity()+1);
            cartRepository.save(found);
            return found;
        }

        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> getAllProductsFromCart() {
        List<Cart> cartList = cartRepository.findAll();

        if(cartList.size() == 0){
            return null;
        }

        return cartList;

    }

    @SneakyThrows
    @Override
    public void delteFromCart(Integer p_id) {
        List<Cart> cartList = cartRepository.findAll();

        Cart found = cartList.stream()
                .filter(s -> s.getProduct_id().getId().equals(p_id))
                .findFirst().orElse(null);

        if(found == null){
            throw new Exception("Product not found in cart");
        }

        cartRepository.delete(found);

    }
}
