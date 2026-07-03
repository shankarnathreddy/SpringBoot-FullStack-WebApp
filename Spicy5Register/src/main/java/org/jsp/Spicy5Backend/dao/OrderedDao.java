package org.jsp.Spicy5Backend.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.Spicy5Backend.repository.OrderedRepository;
import org.jsp.Spicy5Backend.user.Ordered;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class OrderedDao {
	
	@Autowired
	private OrderedRepository repository;

	public Ordered saveOrder(Ordered order) {
		return repository.save(order);
	}

	public Optional<Ordered> findOrderById(int id) {
		return repository.findById(id);
	}

	public void deleteOrder(int id) {
		repository.deleteById(id);;
	}

	public List<Ordered> findAll() {
		return repository.findAll();
	}

	public Ordered updateOrder(Ordered order) {
		return repository.save(order);
	}
	
}
