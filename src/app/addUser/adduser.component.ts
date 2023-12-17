import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from '../models/usermodel'
import { UserLogService } from '../services/UserLog.service'

// add user component.
@Component({
  selector: 'adduser',
  templateUrl: './adduser.component.html'
})

// add user class.
export class AddUser {
  public users: UserModel[] | undefined;
  public profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private userLog: UserLogService) {
    this.users = [];
  }

  // Handle form submit event. 
  onSubmit() {
    let user: UserModel = {
      Email : this.profileForm.value.email,
      First_Name : this.profileForm.value.firstName,
      Last_Name : this.profileForm.value.lastName,
      IsActive : "true",
    };
    
    this.users?.push(user);

    this.userLog.LogMyDetail("Record Added :");
    this.userLog.LogMyDetail(user);
  }
}
