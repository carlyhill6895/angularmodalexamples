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
  @Output() onConfirm = new EventEmitter<void>();

  showModal() {
    this.modal.showModal();
  }

  closeModal() {
    this.modal.closeModal();
  }

  confirm() {
    this.onConfirm.emit();
    this.modal.closeModal();
  }
}
