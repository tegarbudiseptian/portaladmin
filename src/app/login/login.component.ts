import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services/index';
import * as CryptoJS from 'crypto-js';
import {TranslateService} from '@ngx-translate/core';


@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
 
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private translate: TranslateService) {}
 
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
 
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
 
        this.loading = true;
        let shaPassword = CryptoJS.SHA1(this.f.password.value).toString(); // Converting password into SHA1's form.
        console.log('shaPassword : ' + shaPassword);
        this.authenticationService.login(this.f.username.value, shaPassword)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("sukses");
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log("error");
                    this.error = error;
                    // this.alertService.error(error._body);
                    this.loading = false;
                });
    }

    changeLanguage(_lang: string) {
        this.translate.use(_lang);
    }
}