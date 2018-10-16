import { Component, OnInit } from '@angular/core';
import { NewCrudComponent } from '../../../abstract/components/crud.component';
import { ApiService } from '../../../commons/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent extends NewCrudComponent implements OnInit {

  constructor(private apiService: ApiService,
    private location: Location) {
    super(apiService, location);
  }

  ngOnInit() {
    this.buildReportForm();
  }

  private buildReportForm() {
    this.form = new FormGroup({
        title: new FormControl('', Validators.required),
        body: new FormControl('', Validators.required),
    });
  }

}
