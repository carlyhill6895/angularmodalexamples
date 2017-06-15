import { Component} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  show: boolean;

  showModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }
}
