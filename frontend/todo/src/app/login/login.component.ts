import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }


  // event data binding
  handleLogin(){

    if(this.username ==="rdprassy" && this.password === 'rdprassy'){
      this.invalidLogin = false
    }
    else{
      this.invalidLogin =  true
    }
    

//console.log(this.username)

  }

}
