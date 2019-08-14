import { Component, OnInit, ViewChild } from '@angular/core';
import { DataOneComponent } from '../data-one.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../_services';

@Component({
  selector: 'app-update-data-one',
  templateUrl: './update-data-one.component.html',
  styleUrls: ['./update-data-one.component.css']
})
export class UpdateDataOneComponent implements OnInit {

  username = localStorage.getItem("editAdminAccountId");
  role = localStorage.getItem("editAdminAccountRole");
  email = localStorage.getItem("editAdminAccountEmail");
  editData1Form: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.editData1Form = this.formBuilder.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  get f() { return this.editData1Form.controls; }

  onSubmit() {
    this.submitted = true;
    console.log("in onSubmit()");
    if(this.editData1Form.invalid) {
      return;
    }
    this.userService.edit(this.f.username.value.toString(), this.f.role.value.toString(), this.f.email.value.toString()).subscribe();
    console.log("userService.edit() called");
    this.router.navigate(['data-1']);
  }
}
