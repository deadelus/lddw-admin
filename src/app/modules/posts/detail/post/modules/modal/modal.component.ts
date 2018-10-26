import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: "post-modal",
    templateUrl: "modal.component.html",
    styleUrls: [
        "modal.component.css"
    ]
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        let modal = this;
        modal.close();

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('post-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('post-modal-open');
    }
}
