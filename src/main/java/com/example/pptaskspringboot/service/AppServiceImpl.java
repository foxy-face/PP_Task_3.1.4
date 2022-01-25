package com.example.pptaskspringboot.service;

import com.example.pptaskspringboot.dao.RoleRepozitory;
import com.example.pptaskspringboot.dao.UserRepozitory;
import com.example.pptaskspringboot.model.Role;
import com.example.pptaskspringboot.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AppServiceImpl implements AppService {
    private final UserRepozitory userRepozitory;
    private final RoleRepozitory roleRepozitory;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Lazy
    @Autowired
    public AppServiceImpl(UserRepozitory userRepozitory, RoleRepozitory roleRepozitory,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepozitory = userRepozitory;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.roleRepozitory = roleRepozitory;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepozitory.findAll();
    }

    @Override
    public User show(Long id) {
        User user = null;
        Optional<User> optional = userRepozitory.findById(id);
        if (optional.isPresent()) {
            user = optional.get();
        }
        return user;
    }

    @Override
    public void add(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepozitory.save(user);
    }

    @Override
    public void update(Long id, User user) {
        if (user.getPassword() != "") {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        } else {
            user.setPassword(userRepozitory.getById(id).getPassword());
        }
        userRepozitory.save(user);
    }

    @Override
    public void delete(Long id) {
        userRepozitory.deleteById(id);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepozitory.findAllByEmail(email);
    }

    @Override
    public Role getRoleByName(String roleName) {
        return roleRepozitory.findByRoleName(roleName);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepozitory.findAllByEmail(email);
    }
}
