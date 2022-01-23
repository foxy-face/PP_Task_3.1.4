package com.example.pptaskspringboot.dao;

import com.example.pptaskspringboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepozitory extends JpaRepository<User, Long> {
    User findAllByEmail(String email);
}
