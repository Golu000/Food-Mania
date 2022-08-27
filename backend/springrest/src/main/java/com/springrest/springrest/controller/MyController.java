package com.springrest.springrest.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.springrest.springrest.entities.Dish;

import com.springrest.springrest.services.DishServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MyController {
	
	@Autowired
	private DishServiceImpl dishservice;
	
	
	//get the courses
	@GetMapping("/dishes")
	public List<Dish> getDish()
	{
		
		return this.dishservice.getDishes();
		
	}
	

	
	//get a single course 
	@GetMapping("/dishes/{dishId}")
	public Dish getDish(@PathVariable int dishId)
	{
		return this.dishservice.getDish(dishId);
	}
	
	//add course
	@PostMapping("/dishes")
	public Dish addDish(@RequestBody Dish dish)
	{
		return this.dishservice.addDish(dish);
	}
	
	//update course
	@PutMapping("/dishes")
	public Dish updateDish(@RequestBody Dish dish)
	{
		return this.dishservice.updateDish(dish);
	}
	
	//delete the course
	@DeleteMapping("/dishes/{dishId}")
	public ResponseEntity<HttpStatus> deleteDish(@PathVariable int dishId) {
		try {
			this.dishservice.deleteDish(dishId);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}

}
