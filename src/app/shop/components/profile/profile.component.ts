import {Component} from '@angular/core';
import {User} from '../../domain/user';
import {Order} from '../../domain/order';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User;
  showForm = false;

  constructor() {
    this.user = new User('Name', 'e@mail.com',
      [
        new Order('Eggs', 1, 1.25)
      ]);
  }

  changeDetails(formValue) {
    if (formValue) {
      let newName = this.user.name;
      let newEmail = this.user.email;
      if (formValue.name && formValue.email) {
        newName = formValue.name;
        newEmail = formValue.email;
      } else if (formValue.name) {
        newName = formValue.name;
      } else {
        newEmail = formValue.email;
      }
      this.user = new User(newName, newEmail, this.user.previousOrders);
    }
  }
}

