package com.example.pptaskspringboot.rest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
@RequestMapping("/user")
public class UserController {

	@GetMapping
	public String showUser(Principal principal) {
		return "/user";
	}
}