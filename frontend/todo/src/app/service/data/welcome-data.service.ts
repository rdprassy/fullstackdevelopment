import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';




export class HelloWorldBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(

    private http:HttpClient



  ) { }

 
  executeHelloWorldBeanService(){
   return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');

// console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldServiceWithPathVariable(name){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    console.log(name)
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers: headers});

}

createBasicAuthenticationHttpHeader(){
  let username = 'rdprassy';
  let password = 'rdprassy';
  let basicAuthHeaderString = 'Basic '+ window.btoa(username +':' + password)
  return basicAuthHeaderString;
}
}
