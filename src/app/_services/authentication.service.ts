import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';
import { throwError, Observable } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient,
                private config: AppConfig) { }
 
    login(username: string, password: string) {
        return this.http.post(this.config.apiUrl + '/login', { username: username, password: password })
            .map((res:any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    console.log('token: ' + res.token);
                    localStorage.setItem('currentUser', JSON.stringify({ username, password, token: res.token }));
                    console.log('localStorage: ' + localStorage.getItem('currentUser'));
                } else {
                    // else return 400 bad request
                    throw 'Username or password is incorrect';
                }
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}