import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Posts'
    },
    children: [
        {
            path: 'list',
            component: ListComponent,
            data: {
                title: 'Posts List'
            }
        },
        {
            path: 'new',
            component: NewComponent,
            data: {
                title: 'Post New'
            }
        },
        {
            path: ':id',
            component: DetailComponent,
            data: {
                title: 'Post Detail'
            }
        },
        { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
