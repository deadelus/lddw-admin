import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { ApiService } from 'src/app/commons/api.service';
import { BaseComponent } from 'src/app/abstract/base/base.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent {

  constructor(private apiService: ApiService) {
    super(apiService);
    this.api_path = "reports";
  }
}
