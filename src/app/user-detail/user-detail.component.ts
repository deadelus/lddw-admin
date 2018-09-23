import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user = new Observable<String>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private service: HeroService
  ) { }

  ngOnInit() {
    this.user = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('id'))
    );
  }

}
