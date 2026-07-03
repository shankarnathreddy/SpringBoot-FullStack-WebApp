package org.jsp.Spicy5Backend.controller;

import java.util.List;
import java.util.Optional;

import org.jsp.Spicy5Backend.service.OrderedService;
import org.jsp.Spicy5Backend.user.Ordered;
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
public class OrderedController {
	
	@Autowired
	private OrderedService service;
	
	@PostMapping("/orderedSaveOrder")
	public Ordered save(@RequestBody Ordered order) {
		return service.saveOrder(order);
	}
	
	@PutMapping("/orderedUpdateOrder")
	public Ordered update(@RequestBody Ordered order) {
		return service.updateOrder(order);
	}
	@GetMapping("/orderedFind/{id}")
	public Optional<Ordered> findOrderById(@PathVariable int id) {
		return service.findOrderById(id);
	}
	
	@DeleteMapping("/orderedDelete/{id}")
	public void deleteOrder(@PathVariable int id) {
		service.deleteOrder(id);
	}
	
	@GetMapping("/orderedFindAll")
	public List<Ordered> findall(){
		return service.findAll();
	}
	
}
