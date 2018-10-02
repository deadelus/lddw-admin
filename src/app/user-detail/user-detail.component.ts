import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private service: HeroService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
