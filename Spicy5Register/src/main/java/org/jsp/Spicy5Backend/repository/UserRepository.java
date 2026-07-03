package org.jsp.Spicy5Backend.repository;

import org.jsp.Spicy5Backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByEmail(String email);
}
