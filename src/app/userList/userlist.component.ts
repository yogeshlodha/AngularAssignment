import { Component } from '@angular/core';
import { UserModel } from '../models/usermodel'

// user list component
@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html'
})

// user list class.
export class UserList {
  public users: UserModel[];
  public userDetails: UserModel | undefined;
  
  constructor() {
    this.users = [
      { Last_Name: 'Sharma', First_Name: 'Anil ', Email: 'Anil@test.com', IsActive:'true' },
      { Last_Name: 'Verma', First_Name: 'Alok', Email: 'Alok@test.com', IsActive:'true' },
      { Last_Name: 'Jain', First_Name: 'Reena', Email: 'Reena@test.com', IsActive:'true' },
      { Last_Name: 'Sharma', First_Name: 'Dilip', Email: 'Dilip@test.com', IsActive:'true' },
      { Last_Name: 'Sharma', First_Name: 'Manoj', Email: 'Manoj@test.com', IsActive:'true' },
    ];
  }

  // Show user details.
  ShowDetails(user: UserModel | undefined): void {
    if (user != undefined) {
      this.userDetails = user;
    }
  }
}
