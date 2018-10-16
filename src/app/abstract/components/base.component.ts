import { OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/commons/api.service';

export abstract class BaseComponent {
  api_path: any = 'abstract';
  items = [];

  constructor() {
  }

  @HostListener('click')
  onClick() {
    console.log('logging click position...');
  }
}
