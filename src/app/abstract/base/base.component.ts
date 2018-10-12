import { OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/commons/api.service';

export abstract class BaseComponent implements OnInit {
  api_path: any = "abstract";

  constructor(private _apiService: ApiService){
  }

  @HostListener('click')
  onClick(){
    console.log('logging click position...')
  }

  items = []

  ngOnInit() {
    this._apiService.get(this.api_path).subscribe(result => {
      this.items = result;
    }, error => {
      console.log("Error :");
      console.log(error);
    });
  }

}
