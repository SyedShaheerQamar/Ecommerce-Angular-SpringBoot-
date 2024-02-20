package com.ecommerce.Ecommerce.Controller;

import com.ecommerce.Ecommerce.domain.Products;
import com.ecommerce.Ecommerce.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductsService productsService;


    @GetMapping("/products-list")
    public ResponseEntity<List<Products>> getProducts(){
        List<Products> productsList = productsService.getAllProducts();

        return ResponseEntity.ok(productsList);
    }


    @PostMapping("/single-product")
    public ResponseEntity<Products> findProductById(@RequestBody Integer id) throws Exception {
        Products product = productsService.findProductById(id);

        if(product == null){
            throw new Exception("Invalid Id. Id not present");
        }

        return ResponseEntity.ok(product);
    }

}
