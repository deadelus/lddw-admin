import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  posts = [];

  ngOnInit() {
    this.postsService.getPostsList().subscribe(result => {
      this.posts = result;
    }, error => {
      console.log("Error :");
      console.log(error);
    });
  }

}
