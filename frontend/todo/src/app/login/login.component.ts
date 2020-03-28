import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

 
  // event data binding
  handleLogin(){

    if(this.username ==="rdprassy" && this.password === 'rdprassy'){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else{
      this.invalidLogin =  true
    }
    

//console.log(this.username)

  }

}
