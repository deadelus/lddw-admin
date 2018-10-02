import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { BadgesListComponent } from './badges-list/badges-list.component';
import { BadgeDetailComponent } from './badge-detail/badge-detail.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { StatisticsDashboardModule } from './statistics-dashboard/statistics-dashboard.module';

const appRoutes: Routes = [
  { path: '', component: StatisticsDashboardModule },
  { path: 'users', component: UsersListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'comments', component: CommentsListComponent },
  { path: 'comment/:id', component: CommentDetailComponent },
  { path: 'badges', component: BadgesListComponent },
  { path: 'badge/:id', component: BadgeDetailComponent },
  { path: 'reports', component: ReportsListComponent },
  { path: 'report/:id', component: ReportDetailComponent },
  { path: '**', redirectTo: '/' }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    UserDetailComponent,
    PostsListComponent,
    PostDetailComponent,
    CommentsListComponent,
    CommentDetailComponent,
    BadgesListComponent,
    BadgeDetailComponent,
    ReportDetailComponent,
    ReportsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
