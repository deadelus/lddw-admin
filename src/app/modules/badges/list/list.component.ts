import { Component, OnInit } from '@angular/core';
import { BadgesService } from '../badges.service';
import { BaseComponent } from "src/app/abstract/base/BaseComponent";
import { ApiService } from 'src/app/commons/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent {

  constructor(private apiService: ApiService) {
    super(apiService);
    this.api_path = "badges";
  }

}
