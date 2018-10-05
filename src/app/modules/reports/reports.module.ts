import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { ReportsService } from './reports.service';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [ListComponent, NewComponent, DetailComponent],
  providers: [ReportsService]
})
export class ReportsModule { }
