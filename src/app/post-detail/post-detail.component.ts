import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private service: HeroService
) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
  }

}
