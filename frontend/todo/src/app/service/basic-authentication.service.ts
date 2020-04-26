import { Injectable } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticateduser'

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
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers: headers})
    .pipe(
      map( 
        data =>{

      sessionStorage.setItem(AUTHENTICATED_USER,username);
      sessionStorage.setItem(TOKEN,basicAuthHeaderString);
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

  return sessionStorage.getItem(AUTHENTICATED_USER)
    
}

getAuthenticatedToken(){


  if(this.getAuthenticatedUser())
  return sessionStorage.getItem(TOKEN)
    
}

  isUserLoggedIn(){
    let user= sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user===null)
  }

  logout(){

    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)


  }
}


export class AuthenticationBean{


  constructor(public messge:string){

  }
}


