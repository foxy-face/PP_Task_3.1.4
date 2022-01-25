package com.example.pptaskspringboot.service;

import com.example.pptaskspringboot.model.Role;
import com.example.pptaskspringboot.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface AppService extends UserDetailsService {
    List<User> getAllUsers();
    User show(Long id);
    void add(User user);
    void update(Long id, User user);
    void delete(Long id);
    User getUserByEmail(String email);
    Role getRoleByName(String roleName);
}