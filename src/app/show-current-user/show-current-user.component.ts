import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user/user.component";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-show-current-user',
  standalone: true,
  imports: [],
  templateUrl: './show-current-user.component.html',
  styleUrl: './show-current-user.component.scss'
})
export class ShowCurrentUserComponent implements OnInit {
  currentSelectedUser: any = {};
  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.getCurrentUser();
    // this.currentSelectedUser = this.currentUser;
  }

  getCurrentUser() {
    console.log('inside gcu function');
    this.usersService.getCurrentUser().subscribe((user: User) => {
      this.currentSelectedUser = user;
      console.log('current user in show component', this.currentSelectedUser);
    });
  }
}
