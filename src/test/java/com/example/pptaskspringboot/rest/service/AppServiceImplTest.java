//package com.example.pptaskspringboot.rest.service;
//
//import com.example.pptaskspringboot.rest.dao.RoleRepozitory;
//import com.example.pptaskspringboot.rest.dao.UserRepozitory;
//import com.example.pptaskspringboot.rest.model.Role;
//import com.example.pptaskspringboot.rest.model.User;
//import junit.framework.TestCase;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.*;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.mockito.BDDMockito.given;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class AppServiceImplTest extends TestCase {
//    @Autowired
//    private AppService appService;
//
//    @MockBean
//    private UserRepozitory userRepozitory;
//
//    @MockBean
//    private RoleRepozitory roleRepozitory;
//
//    @MockBean
//    private BCryptPasswordEncoder bCryptPasswordEncoder;
//
//    @Test
//    public void testGetAllUsers() {
//        List<User> users = new ArrayList<>();
//        users.add(new User("Alla", "Pugacheva", "Alla", 70, "lalala@mail.ru",
//                new HashSet<>(List.of(new Role("ROLE_USER")))));
//        users.add(new User("Nataliya", "Sugachenko", "Nataliya", 42, "nanana@mail.ru",
//                new HashSet<>(List.of(new Role("ROLE_ADMIN")))));
//        users.add(new User("Ruslan", "Shaldo", "Ruslan", 45, "rururu@mail.ru",
//                new HashSet<>(List.of(new Role("ROLE_USER")))));
//        given(userRepozitory.findAll()).willReturn(users);
//        assertThat(appService.getAllUsers()).isEqualTo(users);
//    }
//
//    @Test
//    public void testAdd() {
//        given(bCryptPasswordEncoder.encode("100"))
//                .willReturn("$2a$12$GIDpx1rT0h4UiRhZj2C8OuAjceSx3KBJK/iHttM1UlDkEbAfO6Lna");
//        User user = new User("Alla", "Pugacheva", "100", 70, "lalala@mail.ru",
//                new HashSet<>(List.of(new Role("ROLE_USER"))));
//        appService.add(user);
//        assertThat(user.getPassword()).isEqualTo("$2a$12$GIDpx1rT0h4UiRhZj2C8OuAjceSx3KBJK/iHttM1UlDkEbAfO6Lna");
//    }
//
//    @Test
//    public void testUpdate() {
//    }
//
//    @Test
//    public void testGetUserByEmail() {
//        given(userRepozitory.findAllByEmail("lalala@mail.ru")).willReturn(new User("Alla",
//                "Pugacheva", "Alla", 70, "lalala@mail.ru",
//                new HashSet<>(List.of(new Role("ROLE_USER")))));
//
//        User rezult = appService.getUserByEmail("lalala@mail.ru");
//        assertThat(rezult.getUsername()).isEqualTo("lalala@mail.ru");
//    }
//
//    @Test
//    public void testGetRoleByName() {
//        given(roleRepozitory.findByRoleName("ROLE_USER")).willReturn(new Role("ROLE_USER"));
//        given(roleRepozitory.findByRoleName("ROLE_ADMIN")).willReturn(new Role("ROLE_ADMIN"));
//        Role role_user = appService.getRoleByName("ROLE_USER");
//        assertThat(role_user.getRoleName()).isEqualTo("ROLE_USER");
//    }
//}