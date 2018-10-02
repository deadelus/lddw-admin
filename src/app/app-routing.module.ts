import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AuthGuard } from './_guard/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {      
    path: '',
    component: LayoutsComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        {
           path: 'dashboard',
           loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
        },
        {
          path: 'users',
          loadChildren: './modules/users/users.module#UsersModule'
        },
        {
          path: 'posts',
          loadChildren: './modules/posts/posts.module#PostsModule'
        },
        {
          path: 'badges',
          loadChildren: './modules/badges/badges.module#BadgesModule'
        },
        {
          path: 'reports',
          loadChildren: './modules/reports/reports.module#ReportsModule'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
