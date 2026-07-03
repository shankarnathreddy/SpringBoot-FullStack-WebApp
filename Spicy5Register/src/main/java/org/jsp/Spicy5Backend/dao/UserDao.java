package org.jsp.Spicy5Backend.dao;

import java.util.Optional;

import org.jsp.Spicy5Backend.repository.UserRepository;
import org.jsp.Spicy5Backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
	
	@Autowired
	private UserRepository repository;
	
	public User saveUser(User user) {
		return repository.save(user);
	}
	
	public User saveUpdate(User user) {
		return repository.save(user);
	}
	
	public void deleteUser(int id) {
		repository.deleteById(id);
	}

	public User findByEmail(String email) {
	    return repository.findByEmail(email);
	}

	public Optional<User> check(int id) {
		return repository.findById(id);
	}
}
