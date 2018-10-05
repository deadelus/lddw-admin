import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesRoutingModule } from './badges-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { BadgesService } from './badges.service';

@NgModule({
  imports: [
    CommonModule,
    BadgesRoutingModule
  ],
  declarations: [ListComponent, NewComponent, DetailComponent],
  providers: [BadgesService] 
})
export class BadgesModule { }
