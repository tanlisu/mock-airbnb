import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayForm: boolean = false;

  firstName: string;
  lastName: string;
  email: string;
  cellPhone: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }
  
  toggleDisplayForm() {
    this.displayForm = !this.displayForm;
  }

  addNewUser() {
    let user = new User();
    user.setInfo(this.firstName, this.lastName, this.email, this.cellPhone);
    this.userService.addUser(user);
    this.toggleDisplayForm();
  }

}