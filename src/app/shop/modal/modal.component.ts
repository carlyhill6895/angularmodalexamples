import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  show: boolean;
  @Input() title: string;
  @Output() onConfirm = new EventEmitter<void>();

  showModal(): void {
    this.show = true;
  }

  confirm(): void {
    this.onConfirm.emit();
    this.show = false;
  }
}

