package org.jsp.Spicy5Backend.service;

import java.util.List;
import java.util.Optional;

import org.jsp.Spicy5Backend.dao.OrderedDao;
import org.jsp.Spicy5Backend.user.Ordered;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderedService {
	
	@Autowired
	private OrderedDao dao;

	public Ordered saveOrder(Ordered order) {
		return dao.saveOrder(order);
	}

	public Optional<Ordered> findOrderById(int id) {
		return dao.findOrderById(id);
	}

	public void deleteOrder(int id) {
		dao.deleteOrder(id);
	}

	public List<Ordered> findAll() {
		return dao.findAll();
	}

	public Ordered updateOrder(Ordered order) {
		return dao.updateOrder(order);
	}
	
}
