import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {NgForOf} from "@angular/common";
import {ShowCurrentUserComponent} from "../show-current-user/show-current-user.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf,
    ShowCurrentUserComponent
  ],
  providers: [UsersService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class UserComponent implements OnInit {
  userList?: User[] = [];
  currentSetUser: any = {};

  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.usersService.getUsers().subscribe((users: any) => {
      this.userList = users;
      console.log('users', users)
    })
  }

  setCurrentUser(user: User) {
    console.log('current set user', user);
    this.currentSetUser = user;
    this.usersService.setCurrentUser(user);
  }
}

export interface User {
  id: string,
  name: string,
  avatar: string
}
