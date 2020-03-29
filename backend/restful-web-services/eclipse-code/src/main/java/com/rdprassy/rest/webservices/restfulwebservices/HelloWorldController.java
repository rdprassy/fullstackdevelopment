package com.rdprassy.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller

//Tell Spring this is controller 
@RestController
public class HelloWorldController {
	
	
	
	//GET
	//URI -/hello-world
	//Method -"Hello World"
//	@RequestMapping(method= RequestMethod.GET, path = "/hello-world")
	
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		
		return "Hello World";
		
	}

}
