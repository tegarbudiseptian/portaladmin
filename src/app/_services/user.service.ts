import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { User } from '../_models';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient,
                private config: AppConfig) { }
      
    getThings() {
    const req = this.http.post(this.config.apiUrl + '/admin/account/', {
        offset: 0,
        limit: 10,
        order: 'username'
        });
        return req;
    }

    getAll() { //example
        return this.http.get<User[]>('/api/users');
    }

    remove(_id: string) {
        console.log("in remove(), _id: " + _id);
        const req = this.http.post(this.config.apiUrl + "/admin/account/remove", {
            id: _id
        });
        console.log("req of remove(): " + req);
        return req;
    }

    add(_id: string, _password: string, _name: string, _role: string, _email: string) {
        console.log("in add(), _id: " + _id + ", _name: " + _name);
        const req = this.http.post(this.config.apiUrl + "/admin/account/add", {
            id: _id,
            pass: _password,
            name: _name, // the value of 'name' variable did not reach the database.
            role: _role,
            email: _email
        });
        console.log("req of add(): " + req);
        return req;
    }

    edit(_id: string, _role: string, _email: string) {
        console.log("in add(), _id: " + _id + ", _role: " + _role + ", _email: " + _email);
        const req = this.http.post(this.config.apiUrl + "/admin/account/edit", {
            id: _id,
            role: _role,
            email: _email
        });
        return req;
    }
}