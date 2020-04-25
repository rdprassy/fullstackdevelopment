import { Injectable } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient ) { }

  // authenticate(username,password){

  //   console.log('before login '+this.isUserLoggedIn())

  //   if(username ==="rdprassy" && password === 'rdprassy'){

  //     sessionStorage.setItem('authenticateduser',username)
  //     console.log('after login '+this.isUserLoggedIn())

  //    return true;
  //   }
  //   return false; 

  // }

  executeAuthenticatinService(username,password){

  let basicAuthHeaderString = 'Basic '+ window.btoa(username +':' + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    console.log(name)
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,{headers: headers})
    .pipe(
      map( 
        data =>{

      sessionStorage.setItem('authenticateduser',username);
      sessionStorage.setItem('token',basicAuthHeaderString);
      return data;
        }
      )
    );

}

createBasicAuthenticationHttpHeader(){
  let username = 'rdprassy';
  let password = 'rdprassy';
  let basicAuthHeaderString = 'Basic '+ window.btoa(username +':' + password)
  return basicAuthHeaderString;
}


getAuthenticatedUser(){

  return sessionStorage.getItem('authenticateduser')
    
}

getAuthenticatedToken(){


  if(this.getAuthenticatedUser())
  return sessionStorage.getItem('token')
    
}

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticateduser')
    return !(user===null)
  }

  logout(){

    sessionStorage.removeItem('authenticateduser')
    sessionStorage.removeItem('token')


  }
}


export class AuthenticationBean{


  constructor(public messge:string){

  }
}


