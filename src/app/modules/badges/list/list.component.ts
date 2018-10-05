import { Component, OnInit } from '@angular/core';
import { BadgesService } from '../badges.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  badges = [];

  constructor(private badgesService: BadgesService) { }

  ngOnInit() {
    this.badgesService.getBadgesList().subscribe(result => {
      this.badges = result;
    },
    error => {
      console.log("Error :");
      console.log(error);
    });
  }

}
