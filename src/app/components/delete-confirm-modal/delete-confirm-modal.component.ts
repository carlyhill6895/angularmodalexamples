import {Component, ViewChild} from '@angular/core';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-delete-confirm-modal',
  templateUrl: './delete-confirm-modal.component.html',
  styleUrls: ['./delete-confirm-modal.component.css']
})
export class DeleteConfirmModalComponent {

  @ViewChild(ConfirmModalComponent) confirmModal: ConfirmModalComponent;

  show() {
    this.confirmModal.showModal();
  }

  delete() {
    console.log('delete confirm called');
  }
}
