import { OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/commons/api.service';
import { BaseComponent } from './base.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

export abstract class CrudComponent extends BaseComponent {
  api_path: any = 'abstract';

  constructor() {
    super();
  }
}

export abstract class ListCrudComponent extends CrudComponent {
  items = [];

  constructor(private _apiService: ApiService) {
    super();
  }

  getList() {
    this._apiService.get(this.api_path).subscribe(result => {
      this.items = result.data;
    }, error => {
      console.log('Error :');
      console.log(error);
    });
  }
}

export abstract class DetailCrudComponent extends CrudComponent {
  item: any;

  constructor(private _apiService: ApiService) {
    super();
  }

  getItem(postId: string) {
    this._apiService.get(this.api_path+"/"+postId).subscribe(result => {
      this.item = result.data;
    }, error => {
      console.log('Error :');
      console.log(error);
    });
  }
}

export abstract class NewCrudComponent extends CrudComponent {
  constructor(private _apiService: ApiService,
    private _location: Location) {
    super();
  }

  form: FormGroup;
  showError: boolean;
  lastCreatedItem: any;
  error: string;
  loading = false;

  cancel() {
    this._location.back();
  }

  onSubmit(data: Object): void {
    this.lastCreatedItem = undefined;
    this.error = undefined;
    if (this.form.valid) {
      this.loading = true;
      this._apiService.post(this.api_path, data).subscribe(result => {
        this.lastCreatedItem = result;
      }, error => {
        this.error = error;
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    }
  }

}
