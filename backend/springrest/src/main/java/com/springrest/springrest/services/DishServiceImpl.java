package com.springrest.springrest.services;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.springrest.springrest.dao.DishDao;

import com.springrest.springrest.entities.Dish;

@Service
public class DishServiceImpl  {
	
	@Autowired
	private DishDao dishDao;

	

	public List<Dish> getDishes() {
		
		return dishDao.findAll();
	}


	public Dish getDish(int dishId) {

		
		return dishDao.getDishById(dishId);
	}

	public Dish addDish(Dish dish) {
		int price=dish.getPrice();
		int quantity=dish.getQuantity();
		int total=price*quantity;
		dish.setTotal(total);

		dishDao.save(dish);
		return dish;
	}
	

	public Dish updateDish(Dish dish) {
		int price=dish.getPrice();
		int quantity=dish.getQuantity();
		int total=price*quantity;
		dish.setTotal(total);
		
		dishDao.save(dish);
		return dish;
	}

	public void deleteDish(int dishId) {

//		@SuppressWarnings("deprecation")
//		Dish entity=dishDao.getOne(parseLong);
//		dishDao.delete(entity);
//		dishDao.deleteById(null);
		dishDao.deleteById(dishId);
	}


	

}
