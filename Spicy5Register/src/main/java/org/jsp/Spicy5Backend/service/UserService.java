package org.jsp.Spicy5Backend.service;

import java.util.Optional;

import org.jsp.Spicy5Backend.dao.UserDao;
import org.jsp.Spicy5Backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserDao dao;
	
	public User saveUser(User user) {
		return dao.saveUser(user);
	}
	
	public User saveUpdate(User user) {
		return dao.saveUpdate(user);
	}
	
	public void deleteUser(int id) {
		dao.deleteUser(id);
	}

	public String login(User user) {
	    User user1 = dao.findByEmail(user.getEmail());

	    if (user1 != null && user1.getPassword().equals(user.getPassword())) {
	        return "Login Success";
	    }
	    return "Invalid Credentials";
	}
	
	public String forgotPassword(User user) {
	    User dbUser = dao.findByEmail(user.getEmail());
	    if(dbUser != null) {
	        dbUser.setPassword(user.getPassword());
	        dao.saveUser(dbUser);
	        return "Password Updated Successfully";
	    }
	    return "Email Not Found";
	}

	public Optional<User> check(int id) {
		return dao.check(id);
	}
	
}
