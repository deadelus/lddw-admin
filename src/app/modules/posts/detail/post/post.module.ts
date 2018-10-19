import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsRepliesComponent } from './comments-replies/comments-replies.component';
import { MediasComponent } from './medias/medias.component';
import { ModalModule } from './modules/modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostComponent,
    MediasComponent,
    CommentsComponent,
    CommentsRepliesComponent
  ],
  providers: [],
  exports: [
    PostComponent,
  ]
})
export class PostModule { }
