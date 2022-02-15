package com.example.pptaskspringboot.rest.dto;

import com.example.pptaskspringboot.rest.model.Role;

import java.util.Set;

public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String password;
    private Integer age;
    private String email;
    private Set<Role> roles;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public Integer getAge() {
        return age;
    }

    public String getEmail() {
        return email;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public Long getId() {
        return id;
    }
}


