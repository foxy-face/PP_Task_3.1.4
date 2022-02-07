package com.example.pptaskspringboot.rest.dao;

import com.example.pptaskspringboot.rest.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepozitory extends JpaRepository<Role, Long> {
    Role findByRoleName(String roleName);
}