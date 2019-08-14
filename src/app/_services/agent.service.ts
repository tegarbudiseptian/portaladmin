import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config"; 
import { Agent } from "../_models/index";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AgentService {
    constructor(private httpClient: HttpClient,
                private config: AppConfig){
    }

    getAgent(){
        return this.httpClient.get<Agent[]>(this.config.apiUrl + '/agent/BNI10559964');
    }

    getAgent2(){
        return this.httpClient.get<Agent[]>(this.config.apiUrl + '/agent/BNI10559964');
    }
}