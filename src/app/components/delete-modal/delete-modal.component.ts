import { Component} from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  show: boolean;

  showModal() {
    this.show = true;
  }
  closeModal() {
    this.show = false;
  }
  delete() {
    console.log('deleting...');
    this.show = false;
  }
}
