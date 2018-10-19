import { Component, OnInit, HostListener } from '@angular/core';
import { PostsService } from '../posts.service';
import { ApiService } from 'src/app/commons/api.service';
import { ListCrudComponent } from '../../../abstract/components/crud.component';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
      trigger('fadeInOut', [
        transition(':enter', [   // :enter is alias to 'void => *'
          style({opacity:0}),
          animate(250, style({opacity:1})) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate(250, style({opacity:0})) 
        ])
      ])
  ]
})
export class ListComponent extends ListCrudComponent implements OnInit {

  itemsVisibility = [];

  constructor(private apiService: ApiService) {
    super(apiService);
    this.api_path = 'posts';
  }

  ngOnInit() {
    this.getList();
  }
}
