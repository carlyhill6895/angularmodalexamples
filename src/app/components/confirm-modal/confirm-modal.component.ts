import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
  @ViewChild(ModalComponent) modal: ModalComponent;
  @Input() confirmReason: string;
  @Output() confirm = new EventEmitter<void>();

  show() {
    this.modal.showModal();
  }

  close() {
    this.modal.closeModal();
  }

  confirmAction() {
    this.confirm.emit();
    this.modal.closeModal();
  }
}
