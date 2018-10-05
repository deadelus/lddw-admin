import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  reports = [];

  ngOnInit() {
    this.reportsService.getReportsList().subscribe(result => {
      this.reports = result;
    },
    error => {
      console.log("Error: ");
      console.log(error);
    });
  }

}
