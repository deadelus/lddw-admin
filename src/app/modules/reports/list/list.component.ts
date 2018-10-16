import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { ApiService } from 'src/app/commons/api.service';
import { ListCrudComponent } from '../../../abstract/components/crud.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends ListCrudComponent implements OnInit {

  constructor(private apiService: ApiService) {
    super(apiService);
    this.api_path = 'reports';
  }

  ngOnInit() {
    this.getList();
  }
}
