import { Component, OnInit, Input } from '@angular/core';
import { Post } from './model/post';
import { ModalService } from './modules/modal/modal.service';

@Component({
  selector: 'post-item',
  templateUrl: './post.component.html',
  styleUrls: [
    './post.component.css'
  ]
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  // Dropdown menu toggle variable
  optionsDD:boolean = false;
  bodyTextModal: string;

  constructor(
    private modalService: ModalService
    ) { }

  ngOnInit() {
    this.bodyTextModal = '';
  }

  dropdownToggle(optionsDD: boolean = true) {
    this.optionsDD = optionsDD;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
