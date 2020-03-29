import { Injectable } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){

    console.log('before login '+this.isUserLoggedIn())

    if(username ==="rdprassy" && password === 'rdprassy'){

      sessionStorage.setItem('authenticateduser',username)
      console.log('after login '+this.isUserLoggedIn())

     return true;
    }
    return false;

  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticateduser')
    return !(user===null)
  }

  logout(){

    sessionStorage.removeItem('authenticateduser')


  }
}


