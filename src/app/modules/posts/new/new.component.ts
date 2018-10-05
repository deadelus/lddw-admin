import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  postForm: FormGroup;
  showError: boolean;
  lastCreatedPost: any;
  error: string;
  loading: boolean = false;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.buildPostForm();
  }

  private buildPostForm() {
    this.postForm = new FormGroup({
        title: new FormControl('', Validators.required),
        body: new FormControl('', Validators.required),
    });
  }

  onSubmit(data: Object): void {
    this.lastCreatedPost = undefined;
    this.error = undefined;
    if (this.postForm.valid) {
      this.loading = true;
      this.postsService.addPost(data).subscribe(result => {
        this.lastCreatedPost = result;
      }, error => {
        this.error = error;
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    }
  }

}
