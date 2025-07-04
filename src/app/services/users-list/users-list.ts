import {Component, OnInit} from '@angular/core';
import {UsersModel} from '../users.model';
import {UsersService} from '../users-service';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-users-list',
  imports: [
    NgForOf
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit{
  users: UsersModel[] = [];

  constructor(private userService: UsersService) {
  }
  ngOnInit(): void {
    this.getListUsers();
  }
  getListUsers() {
    this.userService.getUsers().subscribe(data =>
      this.users = data
    );
    console.log(this.users , "api users") ;
  }
}
