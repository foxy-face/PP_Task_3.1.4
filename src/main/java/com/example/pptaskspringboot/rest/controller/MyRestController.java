package com.example.pptaskspringboot.rest.controller;

import com.example.pptaskspringboot.rest.exception_handling.NoSuchUserException;
import com.example.pptaskspringboot.rest.exception_handling.UserIncorrectData;
import com.example.pptaskspringboot.rest.model.User;
import com.example.pptaskspringboot.rest.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class MyRestController {
    private final AppService appService;

    @Autowired
    public MyRestController(AppService appService) {
        this.appService = appService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return appService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User showUser(@PathVariable Long id) {
        User user = appService.show(id);
        if (user == null) {
            throw new NoSuchUserException("There is no user with id = " + id + " in database");
        }
        return user;
    }

    @PostMapping("/users")
    public User addNewUser(@RequestBody User user) {
        appService.add(user);
        return user;
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {
        appService.update(user);
        return user;
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id) {
        User user = appService.show(id);
        if (user == null) {
            throw new NoSuchUserException("There is no user with id = " + id + " in database");
        }
        appService.delete(id);
        return "User with id = " + id + " was delete";
    }
}
