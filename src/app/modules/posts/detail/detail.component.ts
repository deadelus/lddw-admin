import { Component, OnInit } from '@angular/core';
import { DetailCrudComponent } from 'src/app/abstract/components/crud.component';
import { ApiService } from 'src/app/commons/api.service';
import { ActivatedRoute } from '@angular/router';
import { PostModule } from './post/post.module';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends DetailCrudComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    super(apiService);
    this.api_path = 'posts';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getItem(params['id'])
    });
  }

}
