import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';
import { MonthlyRecapComponent } from './monthly-recap/monthly-recap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatisticsDashboardComponent, MonthlyRecapComponent]
})
export class StatisticsDashboardModule { }
