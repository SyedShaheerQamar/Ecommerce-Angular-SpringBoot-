package com.ecommerce.Ecommerce.repository;

import com.ecommerce.Ecommerce.domain.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
}
