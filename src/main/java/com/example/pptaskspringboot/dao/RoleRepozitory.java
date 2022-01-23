package com.example.pptaskspringboot.dao;

import com.example.pptaskspringboot.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepozitory extends JpaRepository<Role, Long> {
    Role findByRoleName(String role_name);
}