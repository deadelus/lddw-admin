import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

  reportId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
) { }

  ngOnInit() {
    this.reportId = this.route.snapshot.paramMap.get('id');
  }

}
