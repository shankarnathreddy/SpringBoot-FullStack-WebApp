package org.jsp.Spicy5Backend.controller;

import java.util.Optional;

import org.jsp.Spicy5Backend.service.UserService;
import org.jsp.Spicy5Backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/userRegister")
	public User saveUser(@RequestBody User user) {
		return service.saveUser(user);
	}
	
	@PostMapping("/UserLogin")
	public String login(@RequestBody User user) {
		return service.login(user);
	}
	
	@PutMapping("/UserForgot")
	public String forgot(@RequestBody User user) {
		return service.forgotPassword(user);
	}
	@PutMapping("/userUpdate")
	public User saveUpdate(@RequestBody User user) {
		return service.saveUpdate(user);
	}
	
	@DeleteMapping("/userDelete/{id}")
	public String deleteUser(@PathVariable int id) {
	    service.deleteUser(id);
	    return "User Deleted Successfully";
	}
	
	@GetMapping("/UserGet/{id}")
	public Optional<User> get(@PathVariable int id) {
		return service.check(id);
	}
}
