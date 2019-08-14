import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { AuthenticationService } from '../_services/authentication.service';
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('masuk error interceptor');
        return next.handle(request).pipe(catchError(err => {
            console.log('masuk pipe 1');
            if (err.code === 401) {
                console.log('err.status: ' + err.code);
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            console.log('masuk pipe 2 setelah if');
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}