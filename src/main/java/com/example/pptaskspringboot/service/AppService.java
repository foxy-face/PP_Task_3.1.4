package com.example.pptaskspringboot.service;

import com.example.pptaskspringboot.model.Role;
import com.example.pptaskspringboot.model.User;
import java.util.List;

public interface AppService {
    List<User> getAllUsers();
    User show(Long id);
    void add(User user);
    void update(User user);
    void delete(Long id);
    User getUserByEmail(String email);
    Role getRoleByName(String roleName);
}