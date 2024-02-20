package com.ecommerce.Ecommerce.Controller;

import com.ecommerce.Ecommerce.domain.Cart;
import com.ecommerce.Ecommerce.domain.Products;
import com.ecommerce.Ecommerce.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add-cart")
    public ResponseEntity<Boolean> saveProduct(@RequestBody Cart cart){
        Cart savedCart = cartService.saveProductToCart(cart);

        if(savedCart == null){
            ResponseEntity.ok(false);
        }

        return ResponseEntity.ok(true);
    }

    @GetMapping("/get-all-products")
    public ResponseEntity<List<Cart>> getAllProduct() throws Exception {
        List<Cart> cartList = cartService.getAllProductsFromCart();

        if(cartList == null){
            throw new Exception("No Products in Cart!");
        }

        return ResponseEntity.ok(cartList);
    }

    @DeleteMapping("/delete-from-cart")
    public void deleteProduct(@RequestBody Integer p_id){
        cartService.delteFromCart(p_id);
    }


}

