package com.example.pptaskspringboot.rest.controller;

import com.example.pptaskspringboot.rest.model.User;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

	@GetMapping("")
	public String showUserInfo(@CurrentSecurityContext(expression = "authentication.principal") User principal) {
		return "/user";
	}
}