package com.example.pptaskspringboot.service;

import com.example.pptaskspringboot.model.User;
import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User show(Long id);
    void add(User user);
    void update(Long id, User user);
    void delete(Long id);
    User getUserByEmail(String email);
}