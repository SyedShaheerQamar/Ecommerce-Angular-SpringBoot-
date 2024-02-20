package com.ecommerce.Ecommerce.service;

import com.ecommerce.Ecommerce.domain.Login;

import java.util.List;

public interface LoginService {

    public List<Login> getLoginFromDatabase();

}
