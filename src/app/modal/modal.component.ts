import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../services/modal.service';

@Component({
  templateUrl: './modal.component.html',
  selector: 'modal',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element;
  bodyRef = document.querySelector('body');
  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    const modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    this.bodyRef.appendChild(this.element);

    // close modal on background click
    this.element.onclick = event => {
      console.log(event.target);

      if (event.target === document.querySelector('.modal')) {
        this.element.style.display = 'none';
      }
    };
    this.bodyRef.addEventListener('keydown', this.escKeyEventListener);

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.parentNode.removeChild(this.element);
    this.bodyRef.removeEventListener('keydown', this.escKeyEventListener);
  }

  // open modal
  open(): void {
    this.element.style.display = 'contents';
    this.bodyRef.classList.toggle('modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    this.bodyRef.classList.toggle('modal-open');
  }
  escKeyEventListener = event => {
    console.log(event.keyCode);
    if (event.keyCode === 27) {
      this.element.style.display = 'none';
    }
  };
}
