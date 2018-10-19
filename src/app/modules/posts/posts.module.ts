import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { PostsService } from './posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModule } from './detail/post/post.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    PostModule
  ],
  declarations: [ListComponent, NewComponent, DetailComponent],
  providers: [PostsService]
})
export class PostsModule { }
