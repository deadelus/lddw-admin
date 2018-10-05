import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = [];

  constructor(
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.userService.getUsersList().subscribe(result => {
      this.users = result;
    }, 
    error => {
      console.log("Error:");
      console.log(error);
    });
  }

}
