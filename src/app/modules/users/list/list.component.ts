import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ListCrudComponent } from '../../../abstract/components/crud.component';
import { ApiService } from '../../../commons/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends ListCrudComponent implements OnInit {

  constructor(private apiService: ApiService) {
    super(apiService);
    this.api_path = 'users';
  }

  ngOnInit() {
    this.getList();
  }

}
