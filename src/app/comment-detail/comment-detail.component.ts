import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  commentId: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private service: HeroService
  ) { }

  ngOnInit() {
    this.commentId = this.route.snapshot.paramMap.get('id');
  }
}
