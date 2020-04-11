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
    this.service.executeHelloWorldBeanService().subscribe();
    console.log("Get Welcome Message");
  }

}
