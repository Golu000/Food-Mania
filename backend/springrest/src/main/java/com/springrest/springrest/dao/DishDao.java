package com.springrest.springrest.dao;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springrest.springrest.entities.Dish;
@Repository
public interface DishDao extends JpaRepository<Dish,Integer> {
		
	public Dish getDishById(int dishId);
	
		
	
}
