package com.example.pptaskspringboot.service;

import com.example.pptaskspringboot.model.Role;

public interface RoleService{
    Role getRoleByName(String roleName);
}