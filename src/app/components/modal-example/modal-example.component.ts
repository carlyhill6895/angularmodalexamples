import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css']
})
export class ModalExampleComponent {
  show;

  delete() {
    console.log('delete app component called');
    this.show = false;
  }

}
