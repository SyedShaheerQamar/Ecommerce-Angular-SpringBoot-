package com.ecommerce.Ecommerce.service.impl;

import com.ecommerce.Ecommerce.domain.Login;
import com.ecommerce.Ecommerce.repository.LoginRepository;
import com.ecommerce.Ecommerce.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginRepository loginRepository;

    @Override
    public List<Login> getLoginFromDatabase() {
        List<Login> login = loginRepository.findAll();
        return login;
    }
}
