import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import {AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService:string

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) { }

  ngOnInit() {

    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );// subscribe an asynch method
    console.log("Last line of welcome message");
    console.log("Get Welcome Message");
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    console.log(response)
    console.log(response.message)

  }

  handleErrorResponse(error){
    console.log( error.error);
    console.log(error.message);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;



  }

}
