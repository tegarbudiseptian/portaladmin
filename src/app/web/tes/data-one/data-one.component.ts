import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../_services';
import { User } from '../../../_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-one',
  templateUrl: './data-one.component.html',
  styleUrls: ['./data-one.component.css']
})
export class DataOneComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.loadAllAdminAccount();
  }

  loadAllAdminAccount() {
    this.userService.getThings().subscribe((output: User[]) => {
      this.users = output;
      console.log(output);
    });
  }

  removeAdminAccount(_id: string): void {
    console.log("in removeAdminAccount()");
    this.userService.remove(_id).subscribe(() => {
      this.loadAllAdminAccount();
    });
  }

  editAdminAccount(_id: string, _role: string, _email: string) {
    localStorage.setItem("editAdminAccountId", _id);
    localStorage.setItem("editAdminAccountRole", _role);
    localStorage.setItem("editAdminAccountEmail", _email);
    this.router.navigate(['/update-data-1']);
  }
}
