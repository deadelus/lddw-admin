import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';

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

  constructor(private usersService: UsersService,
    private location: Location) { }

  ngOnInit() {
    this.buildPostForm();
  }

  private buildPostForm() {
    this.postForm = new FormGroup({
        name: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        bio: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        active: new FormControl('', Validators.required),
    });
  }

  cancel() {
    this.location.back();
  }

  onSubmit(data: Object): void {
    this.lastCreatedPost = undefined;
    this.error = undefined;
    if (this.postForm.valid) {
      this.loading = true;
      this.usersService.addUser(data).subscribe(result => {
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
