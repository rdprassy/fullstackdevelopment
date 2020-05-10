package com.rdprassy.learning.jpa.jpain10steps;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.rdprassy.learning.jpa.jpain10steps.entity.User;
import com.rdprassy.learning.jpa.jpain10steps.service.UserDAOService;
import com.rdprassy.learning.jpa.jpain10steps.service.UserRespository;

@Component
public class UserRepositoryCommandLineRunner implements CommandLineRunner {
	
	private static final Logger log = LoggerFactory.getLogger(UserRepositoryCommandLineRunner.class);
	
	@Autowired
	private UserRespository userRespository;

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		
		User user = new User("Jill","Admin") ;
		userRespository.save(user);
		log.info("New User is created: "+user);
		
		log.info("something "+userRespository.findAll());
	}

} 
