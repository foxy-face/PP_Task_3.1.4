package com.example.pptaskspringboot.service;

import com.example.pptaskspringboot.dao.RoleRepozitory;
import com.example.pptaskspringboot.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {
    private final RoleRepozitory roleRepozitory;

    @Autowired
    public RoleServiceImpl(RoleRepozitory roleRepozitory) {
        this.roleRepozitory = roleRepozitory;
    }

    @Override
    public Role getRoleByName(String roleName) {
        return roleRepozitory.findByRoleName(roleName);
    }
}
