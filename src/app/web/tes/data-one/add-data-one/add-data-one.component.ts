import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../_services';

@Component({
  selector: 'app-add-data-one',
  templateUrl: './add-data-one.component.html',
  styleUrls: ['./add-data-one.component.css']
})
export class AddDataOneComponent implements OnInit {

  addData1Form: FormGroup;
  returnUrl: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.addData1Form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.returnUrl = "data-1";
  }

  get f() { return this.addData1Form.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.addData1Form.invalid) {
      console.log("in invalid addData1Form");
      return;
    }
    console.log("username: " + this.f.username.value.toString());
    console.log("password: " + this.f.password.value.toString());
    console.log("name: " + this.f.name.value.toString());
    console.log("role: " + this.f.role.value.toString());
    console.log("email: " + this.f.email.value.toString());

    this.userService.add(this.f.username.value.toString(), 
                         this.f.password.value.toString(), 
                         this.f.name.value.toString(), 
                         this.f.role.value.toString(), 
                         this.f.email.value.toString()).subscribe();
    this.router.navigate([this.returnUrl]);
  }

}
