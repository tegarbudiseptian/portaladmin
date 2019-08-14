import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
 
import { User, Agent } from '../_models/index';
import { UserService, AgentService } from '../_services';
 
@Component({templateUrl: './home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];
    agent: Agent[] = [];
    objectKeys = Object.keys;

    constructor(private userService: UserService,
                private agentService: AgentService) {}
 
    ngOnInit() {
    }
 
    getAgent(){
      this.agentService.getAgent().subscribe((agent: Agent[]) => {
        console.log(agent);
        this.agent = agent;
        // console.log(JSON.stringify(this.agent));
        console.log(this.agent);
      });
      
    }

    getAgent2(){
      this.agentService.getAgent2().subscribe((output: Agent[]) => {
        console.log('output: ' + output);
        this.agent = output;
        // console.log(JSON.stringify(this.agent));
        console.log('this.agent' + this.agent);
        
      });
      
    }
}