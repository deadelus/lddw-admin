import { Component, OnInit, Input } from '@angular/core';
import { Media } from './model/media';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html'
})
export class MediasComponent implements OnInit {

  @Input() medias: Media[]

  constructor() { }

  ngOnInit() {
  }

}
