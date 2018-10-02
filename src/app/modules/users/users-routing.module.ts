import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
      path: '',
      data: {
          title: 'Users'
      },
      children: [
          {
              path: 'list',
              component: ListComponent,
              data: {
                  title: 'User List'
              }
          },
          {
              path: 'new',
              component: NewComponent,
              data: {
                  title: 'User New'
              }
          },
          {
              path: ':id',
              component: DetailComponent,
              data: {
                  title: 'User Detail'
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
export class UsersRoutingModule { }
