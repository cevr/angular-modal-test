import { Component, OnInit } from '@angular/core';

import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  bodyText: string;
  isOpen: boolean;
  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
