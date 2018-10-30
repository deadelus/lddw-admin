import { Component, OnInit } from '@angular/core';
import { DetailCrudComponent } from 'src/app/abstract/components/crud.component';
import { ApiService } from 'src/app/commons/api.service';
import { ActivatedRoute } from '@angular/router';
import {User} from './post/model/user';

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

  author: any;
  postAuthorBanned = false;
  postLocked = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getItem(params['id']);
      this.getAuthor(params['id']);
    });
  }

  getAuthor(postId: string) {
    this._apiService.get(this.api_path + '/' + postId + '/author').subscribe(result => {
      this.author = result.data;
      console.log(result.data);
    }, error => {
      console.log('Error :');
      console.log(error);
    });
  }

  banAuthor() {
    this.postAuthorBanned = true;
    console.log('Ban ' + this.item.user.pseudo);
  }

  unbanAuthor() {
    this.postAuthorBanned = false;
    console.log('Unban ' + this.item.user.pseudo);
  }

  lockPost() {
    this.postLocked = true;
    console.log('Lock ' + this.item.id);
  }

  unlockPost() {
    this.postLocked = false;
    console.log('Unlock ' + this.item.id);
  }

  addFakeLikes() {
    console.log('Adding fake likes for ' + this.item.id);
  }

}
