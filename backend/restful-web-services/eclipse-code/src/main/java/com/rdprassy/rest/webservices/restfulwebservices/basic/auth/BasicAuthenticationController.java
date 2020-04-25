package com.rdprassy.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller

//Tell Spring this is controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	
	
	//GET
	//URI -/hello-world
	//Method -"Hello World"
//	@RequestMapping(method= RequestMethod.GET, path = "/hello-world")
	
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		
		 
		return new AuthenticationBean("Hello World - Changed");
		
	}
	
	
	
}
