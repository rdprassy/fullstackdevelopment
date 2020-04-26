import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='rdprassy'
  password = "";
  errormessage = 'Invalid user'
  invalidLogin = false

  constructor(private router: Router, private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit() {
  }

 
  // event data binding
  handleLogin(){

    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }

    // if(this.username ==="rdprassy" && this.password === 'rdprassy'){
    //   this.router.navigate(['welcome', this.username])
    //   this.invalidLogin = false
    // }
    else{
      this.invalidLogin =  true
    }
    

//console.log(this.username)

  }

  handleBasicLogin(){

    this.basicAuthenticationService.executeAuthenticatinService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }
     )
     
   

//console.log(this.username)

  }

  handleJWTAuthLogin(){

    this.basicAuthenticationService.executeJWTAuthenticatinService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }
     )
     
   

//console.log(this.username)

  }

}
