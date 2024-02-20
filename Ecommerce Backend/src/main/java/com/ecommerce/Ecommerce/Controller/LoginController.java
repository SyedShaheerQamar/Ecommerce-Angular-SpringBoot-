package com.ecommerce.Ecommerce.Controller;

import com.ecommerce.Ecommerce.domain.Login;
import com.ecommerce.Ecommerce.service.LoginService;
import com.ecommerce.Ecommerce.service.impl.LoginServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {


    @Autowired
    LoginService loginService;

    @PostMapping("/login/validation")
    public Integer checkLoginValidation(@RequestBody Login log){
        List<Login> loginList = loginService.getLoginFromDatabase();

        Login check = loginList.stream()
                        .filter(s -> s.getNamee().equalsIgnoreCase(log.getNamee())
                        && s.getPass().equalsIgnoreCase(log.getPass()))
                        .findFirst().orElse(null);

        if(check != null){
            return check.getId();
        }

        return null;
    }



}
