import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-badge-detail',
  templateUrl: './badge-detail.component.html',
  styleUrls: ['./badge-detail.component.css']
})
export class BadgeDetailComponent implements OnInit {

  badgeId: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private service: HeroService
  ) { }

  ngOnInit() {
    this.badgeId = this.route.snapshot.paramMap.get('id');
  }


}
