import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
import { NewCrudComponent } from '../../../abstract/components/crud.component';
import { ApiService } from '../../../commons/api.service';

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
    this.buildUserForm();
  }

  private buildUserForm() {
    this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        bio: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        active: new FormControl('', Validators.required),
    });
  }
}
